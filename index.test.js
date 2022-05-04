/*
- Utilizamos a biblioteca JEST.
- Criamos uma lista de lista de 4 itens, 3 ponto do triangulos e sua saida.
- Implemantamos 3 funções, Cada função é um for-loop or each-loop que precorre nossa lista de listas e testa nossa entrada e saida
e retorna o resultado do teste.
#Resultados: 
Test Suites: 1 failed, 1 total
Tests:       1 failed, 38 passed, 39 total
Snapshots:   0 total
Time:        0.425 s, estimated 1 s
Ran all test suites.
*/
const index = require('./index');

// Lista com os lados e o gabarito
const lista = [[3,3,3,"equilatero"], [5,5,5, "equilatero"], [10,10,12,"isosceles"], [6,6,8,"isosceles"], [5,5,6,"isosceles"],
                 [7,9,14,"escaleno"], [0,0,0,"invalido"], [0,0,1,"invalido"], [0,1,1,"invalido"], [5,3,9,"invalido"], [3,9,5,"invalido"],
                 [9,3,5,"invalido"], [5,5,10, "invalido"]];

// Função que testa o triangulo. Fizemos dessa forma antes de descobrir que o próprio Jest possui uma função para isso. (Graças ao nosso colega)
for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  test(`Should Run TipoTriangulo1 with params (${element[0]},${element[1]},${element[2]}) and result in \"${element[3]}\"`, () => {
    expect(index.TipoTriangulo1(element[0],element[1],element[2])).toBe(element[3]);    
  });
}

// Usando a função adequada do Jest o código fica ainda mais clean.
test.each(lista)('Should Run TipoTriangulo2 with params (%s,%s,%s) and result in \"%s\"', (firstArg, secondArg, thirdArg, expectedResult) => {
  expect(index.TipoTriangulo2(firstArg,secondArg,thirdArg)).toBe(expectedResult);    
});


test.each(lista)('Should Run TipoTriangulo3 with params (%s,%s,%s) and result in \"%s\"', (firstArg, secondArg, thirdArg, expectedResult) => {
  expect(index.TipoTriangulo3(firstArg,secondArg,thirdArg)).toBe(expectedResult);    
});

