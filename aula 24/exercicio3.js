
const estaDos= (numero)=>{
if(numero % 3===0) return 'fizz';
if(numero % 5 ===0) return 'buzz';
if (numero %3 && numero % 5===0) return 'fizzbuzz';
return numero;
};
console.log(estaDos(2))