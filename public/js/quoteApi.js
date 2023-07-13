const category = 'art';

document.addEventListener('DOMContentLoaded', () => {
  createQuoteBlock();
  getQuote();
});

function createQuoteBlock() {
  const quoteBlock = document.createElement('div');
  quoteBlock.id = 'quote-block';

  const authorParagraph = document.createElement('p');
  authorParagraph.id = 'author';
  authorParagraph.textContent = 'Author: ';

  const quoteParagraph = document.createElement('p');
  quoteParagraph.id = 'quote';
  quoteParagraph.textContent = 'Quote: ';

  const newQuoteButton = document.createElement('button');
  newQuoteButton.className = 'btn btn-alt';
  newQuoteButton.textContent = 'Обновить цитату';
  newQuoteButton.addEventListener('click', getQuote);

  quoteBlock.appendChild(authorParagraph);
  quoteBlock.appendChild(quoteParagraph);
  quoteBlock.appendChild(newQuoteButton);

  const mainContent = document.querySelector('footer');
  mainContent.insertBefore(quoteBlock, mainContent.firstChild);
}

async function getQuote() {
  try {
    const response = await fetch('/api/api-key');
    const { apiKey } = await response.json();
    const quoteResponse = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (!quoteResponse.ok) {
      throw new Error(`Request failed with status code ${quoteResponse.status}`);
    }

    const result = await quoteResponse.json();

    if (Array.isArray(result) && result.length > 0) {
      const quote = result[0];
      const { author } = quote;
      const quoteText = quote.quote;

      const authorElement = document.getElementById('author');
      const quoteElement = document.getElementById('quote');
      authorElement.innerHTML = `
                                  <h2>Цитаты об искусстве:</h2>
                                 <span>Author:</span> ${author}`;
      quoteElement.innerHTML = `<span>Quote:</span> ${quoteText}`;
    } else {
      console.error('Error: Invalid response format');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}
