const numero = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML  =  '';
texto.innerHTML += `<p>é nan: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>raiz quadrada: ${numero **0.5 }.</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>arredondado pra baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>arredondado pra cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}.</p>`;







/*arredondado pra baixo
raiz quadrada
é nan 
é inteiro
pra cima 
com duas casas decimais*/ 