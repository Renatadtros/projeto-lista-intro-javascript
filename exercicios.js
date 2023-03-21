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
// Escreva dentro da função calculaAreaRetangulo uma lógica que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.
function calculaAreaRetangulo() {
  var alturaRetangulo = Number(prompt('Digite a altura do retângulo: '));
  var larguraRetangulo = Number(prompt('Digite a largura do retângulo: '));
  var areaRetangulo = alturaRetangulo * larguraRetangulo;
  console.log (areaRetangulo);
}


// EXERCÍCIO 02
//  Escreva dentro da função imprimeIdade uma lógica que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
function imprimeIdade() {
  var anoAtual = Number(prompt('Digite o ano atual: '));
  var anoNasc = Number(prompt('Digite o ano do seu nascimento: '));
  var idade = anoAtual - anoNasc;
  console.log (idade);
}

// EXERCÍCIO 03
//  Escreva dentro da função calculaIMC uma lógica que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).O IMC pode ser calculado de acordo com a fórmula a seguir:IMC = Peso ÷ (Altura × Altura)
function calculaIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
//  Escreva dentro da função imprimeInformacoesUsuario uma lógica que pede ao usuário seu nome, sua idade e seu email (nessa ordem), e imprime no console uma mensagem como a seguinte:Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.
function imprimeInformacoesUsuario() {
  var nome = (prompt ('Digite seu nome: '));
  var idade = Number(prompt('Digite sua idade: '));
  var email = (prompt ('Digite seu email'));
  var imprimeInformacoesUsuario = 'Meu nome é ' + nome +', tenho ' + idade +' anos, e o meu email é '+ email + '.'
  console.log (imprimeInformacoesUsuario);
  
}

// EXERCÍCIO 05
//  Escreva dentro da função imprimeTresCoresFavoritas uma lógica que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
  function imprimeTresCoresFavoritas() {
    let cores = [];
    let cor1 = prompt("Digite a primeira cor favorita:");
    let cor2 = prompt("Digite a segunda cor favorita:");

    let cor3 = prompt("Digite a terceira cor favorita:");
    
    cores.push(cor1);
    cores.push(cor2);
    cores.push(cor3);
    
    console.log(cores);
  }
  

// EXERCÍCIO 06
// Escreva dentro da função retornaStringEmMaiuscula uma lógica que recebe uma string e retorna ela em letra maiúscula. ex: entrada: oi saída: OI
function retornaStringEmMaiuscula(stringMinuscula) {
  return stringMinuscula.toUpperCase()

}

// EXERCÍCIO 07
//  Escreva dentro da função calculaIngressosEspetaculo uma lógica que recebe o custo de um espetáculo de teatro e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) e retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo.
function calculaIngressosEspetaculo(custoTotalEspetaculo, valorIngresso) {
  var calculaIngressosEspetaculo = Number(custoTotalEspetaculo / valorIngresso);
  return calculaIngressosEspetaculo;
}

// EXERCÍCIO 08
//  Escreva dentro da função checaStringsMesmoTamanho uma lógica que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho. Ex: entrada: string1: "ola" string2: "abc" saide: true
function checaStringsMesmoTamanho(string1 , string2){
return string1.length === string2.length;
}


// EXERCÍCIO 09
//Escreva dentro da função retornaPrimeiroElemento uma lógica que recebe um array e retorna o primeiro elemento.Ex: entrada: array: [1,2,3]  saida: 1 outro exemplo: array: ["Laranja", "Banana", "Maçã"]   saida:     "Laranja"
function retornaPrimeiroElemento(array) {
return array[0];
}

// EXERCÍCIO 10
//  Escreva dentro da função retornaUltimoElemento uma lógica que recebe um array e retorna o último elemento.Ex: Entrada array: [1, 2, 3, 4, 5] Saída 5
function retornaUltimoElemento (array) {
  return array[array.length-1];
}

// EXERCÍCIO 11
//aqui peguei o ultimo elemento da lista que tem o valor de [-1] e estou add ao primeiro que tem o valor de [0] o atributo length significa cumprimento do array.
function trocaPrimeiroEUltimo(array) {
  var primeiroItemDoArray = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = primeiroItemDoArray;
  return array;
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  /*var anoAtual = Number(prompt ('Digite o ano atual: '));
  var anoNasc = Number(prompt('Digite o ano em que você nasceu: '));
  var anoRg = Number(prompt ('Digite ano de emissão do RG: '));

  var idade = anoAtual - anoNasc;
  var idadeRg = anoAtual - anoRg; 
  var renovaAte20Anos = (idade <= 20) && (idadeRg >= 5);
  var renovaAte50Anos = (idade > 20) && (idade <= 50) && (idadeRg >= 10);
  var renovaAcima50Anos = (idade >50) && (idadeRg >= 15);
  console.log(renovaAte20Anos || renovaAte50Anos || renovaAcima50Anos);
  */
}

function checaRenovacaoRG() {
  // implemente sua lógica aqui
  var cYear = Number(prompt('qual é o ano atual?'));
  var bYear = Number(prompt('qual é o seu ano de nascimento?'));
  var emission = Number(prompt('qual o ano de emissão do seu rg?'));

  var age = cYear - bYear;
  
  var renew = ((age <= 20 && cYear - emission >= 5) || (age >= 21 && age <= 50 && cYear - emission >= 10) || (age >= 51 && cYear - emission >= 15));
  
  console.log(renew);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}