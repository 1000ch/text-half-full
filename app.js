import { documentReady } from 'https://unpkg.com/html-ready';

function toFullWidth(string) {
  return string.replace(/[\w -]/g, s => {
    return ({
      ' ': '　'
    })[s] || String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
}

function toHalfWidth(string) {
  return string.replace(/[Ａ-Ｚａ-ｚ０-９＿　ー]/g, s => {
    return ({
      '　': ' '
    })[s] || String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

documentReady.then(() => {
  const fullInput  = document.querySelector('#full-input');
  const fullOutput = document.querySelector('#full-output');
  const fullError = document.querySelector('#full-error');

  fullInput.addEventListener('input', () => {
    try {
      fullOutput.value = toFullWidth(fullInput.value);
      fullError.textContent = '';
    } catch (error) {
      fullError.textContent = error.message;
    }
  });

  const halfInput  = document.querySelector('#half-input');
  const halfOutput = document.querySelector('#half-output');
  const halfError = document.querySelector('#half-error');

  halfInput.addEventListener('input', () => {
    try {
      halfOutput.value = toHalfWidth(halfInput.value);
      halfError.textContent = '';
    } catch (error) {
      halfError.textContent = error.message;
    }
  });
});
