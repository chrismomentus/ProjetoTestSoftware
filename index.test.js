const index = require('./index');

const lista = [[3,3,3,"equilatero"], [5,5,5, "equilatero"], [10,10,12,"isosceles"], [6,6,8,"isosceles"], [5,5,6,"isosceles"],
                 [7,9,14,"escaleno"], [0,0,0,"invalido"], [0,0,1,"invalido"], [0,1,1,"invalido"], [5,3,9,"invalido"], [3,9,5,"invalido"],
                 [9,3,5,"invalido"], [5,5,10, "invalido"]]



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

  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    test('Run Triangulo3', () => {
      expect(index.TipoTriangulo3(element[0],element[1],element[2])).toBe(element[3]);    
    });
  }

// # Testes 1
// # Esperando Equilátero
// # print(TipoTriangulo1(3,3,3))
// # print(TipoTriangulo1(5,5,5))

// # # Esperando Isosceles
// # print(TipoTriangulo1(10,10,12))
// # print(TipoTriangulo1(6,6,8))
// # print(TipoTriangulo1(5,5,6))

// # # Esperando Escaleno
// # print(TipoTriangulo1(7,9,14))

// # # Esperando Erro
// # print(TipoTriangulo1(0,0,0))
// # print(TipoTriangulo1(0,0,1))
// # print(TipoTriangulo1(0,1,1))
// # print(TipoTriangulo1(5,3,9))
// # print(TipoTriangulo1(3,9,5))
// # print(TipoTriangulo1(9,3,5))
// # ----------------------------------------