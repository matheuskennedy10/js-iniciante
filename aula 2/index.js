const nome = 'matheus';
const sobrenome = 'kennedy';
const idade = '19';
const peso = '1.70';
const alturaemmt = '181';
let imc;
let anonascimento;

imc = peso / (alturaemmt * alturaemmt);
anonascimento = 2021 - idade;

console.log(`${nome, sobrenome} tem  ${idade} anos, pesa ${peso} kg `);
console.log(`tem ${alturaemmt} de altura e seu imc e de  ${imc}`);
console.log(`${nome} nasceu em ${anonascimento}`);