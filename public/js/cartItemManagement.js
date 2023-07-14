const cartItemDeleteFormElements = document.querySelectorAll('.cart-item-management');

async function deleteCartItem(e) {
  e.preventDefault();

  const form = e.target;
  let response;
  try {
    response = await fetch(`/cart/${productId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        productId,
        quantity,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
  }
  if (!response.ok) {
    alert('Не получен ответ от сервера');
  }

  const responseData = await response.json();


}
cartItemDeleteFormElements.forEach((element) => {
  element.addEventListener('submit', deleteCartItem);
});
