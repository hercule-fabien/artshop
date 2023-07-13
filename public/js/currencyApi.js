async function getCurrencyConversion(totalPrice) {
  try {
    const apiKeyResponse = await fetch('/api/api-key');
    const { apiKey } = await apiKeyResponse.json();

    const response = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=RUB&want=USD&amount=${totalPrice}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const data = await response.json();
    const convertedPrice = data.new_amount;
    const currencyCode = data.new_currency;

    const currencyElement = document.createElement('div');
    currencyElement.id = 'currency-element';
    currencyElement.innerHTML = `<p><span>Стоимость в USD:</span> ${convertedPrice}&#36;</p>`;

    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.insertAdjacentElement('afterend', currencyElement);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const totalPriceElement = document.getElementById('total-price');

  if (totalPriceElement) {
    const totalPrice = parseFloat(totalPriceElement.textContent);
    getCurrencyConversion(totalPrice);
  }
});
