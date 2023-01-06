const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  if (!name) {
    alert('يرجى إدخال اسمك للمتابعة');
    return;
  }
  const greeting = `عيد مبارك علينا وعليك يا ${name}`;
  window.location.replace(`greetings.html?name=${encodeURIComponent(name)}`);
});
