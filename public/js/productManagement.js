const deleteProductButtonElements = document.querySelectorAll('.product-item button');

async function deleteProduct(event) {
  const buttonElement = event.target;
  const productId = buttonElement.dataset.productid;

  const response = await fetch(`/admin/products/${productId}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    buttonElement.parentElement.parentElement.parentElement.parentElement.remove();
  } else {
    alert('Ошибка удаления');
  }
}

deleteProductButtonElements.forEach((elem) => {
  elem.addEventListener('click', deleteProduct);
});
