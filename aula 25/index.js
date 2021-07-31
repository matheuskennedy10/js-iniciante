const mosTraHora = ()=>{
  let data= new Date ();
return data.toLocaleDateString('pt-br', {
  hour12:false
});
}

const timer = setInterval(function() {
  console.log(mosTraHora())
}, 1000);

setInterval(function() {
  clearInterval(timer);
}, 3000);

setTimeout(function(){
  console.log('olá mundo ');
},5000);