// 1) Escreva uma função chamada dobrar que recebe um número como parâmetro e retorna o dobro desse número. Use a sintaxe de função tradicional. 

function dobrar(numero) {
    return numero * 2;
  };

console.log(dobrar(5));

// 2) Reescreva a função dobrar utilizando a sintaxe de função anônima atribuída a uma variável. 

const anonima = function(numero2) {
    return numero2 * 2;
  };

  function nome(aline) {
    return "aline";
  };

  // 3) Transforme a função dobrar em uma função de seta (arrow function). 

  const dobrar = (numero) => numero * 2;

  // 4) Escreva uma função chamada saudacao que recebe o nome de uma pessoa como parâmetro e retorna uma saudação personalizada. Use a sintaxe de função de seta. 

  const saudacao = (nome) => {
    return `Olá, ${nome}! Bem-vindo(a)`;
  };

  // 5) Reescreva a função saudacao utilizando a sintaxe de função tradicional. 

  function saudacao(nome) {
    return "Olá, seja-bem vindo"

  };

  // 6) Crie uma função chamada somarNumeros que recebe um número indeterminado de argumentos e retorna a soma desses números. Utilize a sintaxe de função tradicional. 

  function somarNumeros(num1,num2) {
    return num1+num2;
  };

  // 7) Transforme a função somarNumeros em uma função de seta. 

  const somarNumeros = (num1,num2) => num1 + num2;

  // 8) Escreva uma função chamada saudacao que recebe o nome de uma pessoa como parâmetro e retorna uma saudação personalizada. Por exemplo, se o nome for "João", a função deve retornar "Olá, João!". 

  