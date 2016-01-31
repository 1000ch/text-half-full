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

window.onload = e => {
  const fullInput  = document.querySelector('#full-input');
  const fullOutput = document.querySelector('#full-output');
  const halfInput  = document.querySelector('#half-input');
  const halfOutput = document.querySelector('#half-output');

  fullInput.addEventListener('input', e => fullOutput.value = toFullWidth(fullInput.value));
  halfInput.addEventListener('input', e => halfOutput.value = toHalfWidth(halfInput.value));
};

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: '/text-half-full/'
  }).catch(error => console.error(error));
}
