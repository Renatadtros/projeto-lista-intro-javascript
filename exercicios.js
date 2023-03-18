// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
//implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  var alturaRetangulo = Number(prompt('Digite a altura do retângulo: '));
  var larguraRetangulo = Number(prompt('Digite a largura do retângulo: '));
  var areaRetangulo = alturaRetangulo * larguraRetangulo;
  console.log (areaRetangulo);
}


// EXERCÍCIO 02
function imprimeIdade() {
  var anoAtual = Number(prompt('Digite o ano atual: '));
  var anoNasc = Number(prompt('Digite o ano do seu nascimento: '));
  var idade = anoAtual - anoNasc;
  console.log (idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  var nome = (prompt ('Digite seu nome: '));
  var idade = Number(prompt('Digite sua idade: '));
  var email = (prompt ('Digite seu email'));
  var imprimeInformacoesUsuario = 'Meu nome é ' + nome +', tenho ' + idade +' anos, e o meu email é '+ email + '.'
  console.log (imprimeInformacoesUsuario);
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}