const form = document.querySelector('form');
const newDiv = document.createElement('div');
newDiv.className = 'alert';
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.email || !res.password) {
    newDiv.innerHTML = '<h2>Поля не должны быть пустыми!</h2>';
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
        newDiv.innerHTML = `<h2>Ошибка!</h2>
                             <p>${result.err}</p>`;
        form.parentNode.insertBefore(newDiv, form);
      } else {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error(error);
    }
  }
});
