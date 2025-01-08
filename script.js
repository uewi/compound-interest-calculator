document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const p = parseFloat(document.getElementById('p').value);
  const r = parseFloat(document.getElementById('r').value) / 100;
  const n = parseInt(document.getElementById('n').value);
  const t = parseFloat(document.getElementById('t').value);

  const interest = p * Math.pow(1 + r / n, t * n) - p;

  const result = document.getElementById('result');
  result.innerHTML = `
      <h3>Result:</h3>
      <p>Interest: $${interest.toFixed(2)}</p>
  `;
});
