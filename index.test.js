/*
- Utilizamos a bibliotece JEST.
- Criamos uma lista de lista de 4 itens, 3 ponto do triangulos e sua saida.
- Implemantamos 3 funções, Cada função é um for-loop or each-loop que precorrer nossa lista de lista e testar nossa entrada e saida, 
e retorna o resultado do teste.
#Resultados: 
Test Suites: 1 failed, 1 total
Tests:       1 failed, 38 passed, 39 total
Snapshots:   0 total
Time:        0.425 s, estimated 1 s
Ran all test suites.
*/
const index = require('./index');


const lista = [[3,3,3,"equilatero"], [5,5,5, "equilatero"], [10,10,12,"isosceles"], [6,6,8,"isosceles"], [5,5,6,"isosceles"],
                 [7,9,14,"escaleno"], [0,0,0,"invalido"], [0,0,1,"invalido"], [0,1,1,"invalido"], [5,3,9,"invalido"], [3,9,5,"invalido"],
                 [9,3,5,"invalido"], [5,5,10, "invalido"]];


  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    test('Run Triangulo1', () => {
      expect(index.TipoTriangulo1(element[0],element[1],element[2])).toBe(element[3]);    
    });
  }

 
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    test('Run Triangulo2', () => {
      expect(index.TipoTriangulo2(element[0],element[1],element[2])).toBe(element[3]);    
    });
  }


  test.each(lista)('Run Triangulo3', (firstArg, secondArg, thirdArg, expectedResult) => {
    expect(index.TipoTriangulo3(firstArg,secondArg,thirdArg)).toBe(expectedResult);    
  });

