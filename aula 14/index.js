//operacao ternaria//

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario vip' : 'usuario normal';

const corUsuario = null;
const corPadrão = corUsuario || 'preta';

console.log(nivelUsuario, corPadrão);