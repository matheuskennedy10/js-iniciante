let varA = 'A';
let varB = 'B';
let varC = 'C';

var varloa = varA;
varA = varB;
varB = varC;
varC = varloa;

console.log(varA, varB, varC);