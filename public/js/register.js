const form = document.querySelector('form');
const newDiv = document.createElement('div');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.email || !res.password) {
    newDiv.innerHTML = '<p style="color: crimson; text-align: center">Поля не должны быть пустыми!</p>';
    form.parentNode.insertBefore(newDiv, form);
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.err) {
        newDiv.innerHTML = `<p style="color: crimson; text-align: center">Ошибка! ${result.err}</p>`;
        form.parentNode.insertBefore(newDiv, form);
      } else {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error(error);
    }
  }
});
