const imagePickerElement = document.querySelector('#image-upload-control input');
const imagePreviewElement = document.querySelector('#image-upload-control img');
console.log('image preview script');

function updateImagePreview() {
  const { files } = imagePickerElement;
  if (!files || files.length === 0) {
    imagePreviewElement.style.display = 'none';
  }

  const pickedFile = files[0];

  imagePreviewElement.src = URL.createObjectURL(pickedFile);
  imagePreviewElement.style.display = 'block';
}

imagePickerElement.addEventListener('change', updateImagePreview);
