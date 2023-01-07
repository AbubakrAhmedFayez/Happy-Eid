const greeting = document.querySelector('#greeting');
const name = decodeURIComponent(window.location.search.slice(6));
greeting.textContent = `عيد مبارك علينا وعليك يا ${name}`;

const downloadBtn = document.querySelector('#download-button');
downloadBtn.addEventListener('click', () => {
  html2canvas(greeting, { scale: 2 }).then((canvas) => {
    const link = document.createElement('a');
    link.download = `${name}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
});
