//atribuicao via desestruturação

const pessoa = {
  nome: 'luiz',
  sobrenome: 'kennedy',
  idade: 32,
    endereco: {
      rua: 'av brasil',
  numero: 345
}
};

const {endereco :{rua, numero}} = pessoa
console.log(rua, numero);

//const {nome} = pessoa;
//console.log(nome)