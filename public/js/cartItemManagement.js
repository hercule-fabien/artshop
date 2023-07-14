document.addEventListener('DOMContentLoaded', () => {
  const deleteButtons = document.querySelectorAll('.delete');

  async function deleteCartItem(e) {
    const button = e.target;
    const cartId = button.dataset.cartid;
    console.log('CART ID ===>', cartId);

    let response;
    try {
      response = await fetch('/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartId }),
      });

      if (response.ok) {
        const cartItemElement = button.closest('.cart-item');
        cartItemElement.remove();
      } else {
        alert('Не получен ответ от сервера');
      }
    } catch (error) {
      console.error(error);
    }
  }

  deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteCartItem);
  });
});
