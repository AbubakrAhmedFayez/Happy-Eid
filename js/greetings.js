const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');

const greeting = document.querySelector('#greeting');
greeting.innerHTML = `عيد مبارك علينا وعليك يا ${name}`;
