const addToCartButtonElement = document.querySelector('#product-details button');
const badge = document.querySelector('.nav-items .badge');
async function addToCart() {
  const productId = addToCartButtonElement.dataset.productid;
  const userId = addToCartButtonElement.dataset.userid;
  const { price } = addToCartButtonElement.dataset;
  const quantity = 1;
  let response;
  try {
    response = await fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        userId,
        price,
        quantity,
      }),
    });
  } catch (error) {
    console.error(error);
    alert('Что-то пошло не так');
  }

  if (!response.ok) {
    alert('Заминка вышла, не влезло в корзину.');
  }
  const responseData = await response.json();

  badge.innerText = +badge.innerText + Number(responseData.quantity);
}

addToCartButtonElement.addEventListener('click', addToCart);
