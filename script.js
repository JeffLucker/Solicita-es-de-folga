const spans = document.querySelectorAll('.star');

// Define a variável CSS com base no atributo data-i
spans.forEach(span => {
  const iValue = span.getAttribute('data-i');
  span.style.setProperty('--size', iValue); // Define a variável CSS com o valor de data-i
});
