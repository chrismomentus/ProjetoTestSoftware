module.exports.TipoTriangulo1 = function TipoTriangulo1(a,b,c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "invalido"
    }

    if (a+b >= c && a+c >= b && b+c >= a){
        if (a==b && b == c)
            return "equilatero"
        if (a==b || a==c || b==c)
            return "isosceles"
        return "escaleno"
    }
    return "invalido"
}

module.exports.TipoTriangulo2 = function TipoTriangulo2(a,b,c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "invalido"
    }

    if (a+b > c && a+c > b && b+c >= a){
        if (a==b && b == c)
            return "equilatero"
        if (a==b || a==c || b==c)
            return "isosceles"
        return "escaleno"
    }
    return "invalido"
}

module.exports.TipoTriangulo3 = function TipoTriangulo3(a,b,c) {
    if (a <= 0 || b <= 0 || c < 0) {
        return "invalido"
    }

    if (a+b > c && a+c > b && b+c > a){
        if (a==b && b == c)
            return "equilatero"
        if (a==b || a==c || b==c)
            return "isosceles"
        return "escaleno"
    }
    return "invalido"
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

// def scriptTest(func):
//     print("Começando teste...\n\n")
//     numeroErros = 0
//     lista = [[3,3,3,"equilatero"], [5,5,5, "equilatero"], [10,10,12,"isosceles"], [6,6,8,"isosceles"], [5,5,6,"isosceles"],
//                 [7,9,14,"escaleno"], [0,0,0,"invalido"], [0,0,1,"invalido"], [0,1,1,"invalido"], [5,3,9,"invalido"], [3,9,5,"invalido"],
//                 [9,3,5,"invalido"], [5,5,10, "invalido"]]
//     listaErros = []


//     for i in lista:
//         resp = func(i[0], i[1], i[2])
//         if resp != i[3]:
//             numeroErros = numeroErros + 1
//             listaErros.append([i[0], i[1], i[2], i[3], resp])
    
//     print("Teste finalizado com", numeroErros, "erro(s)\n")
    
//     if numeroErros > 0:
//         print("Os erros foram:")
//         contadorDoPrint = 0
//         for i in listaErros:
//             contadorDoPrint = contadorDoPrint + 1
//             print("Erro", contadorDoPrint, ":\n  Lados:(", i[0], i[1], i[2], ") geraram a resposta", i[4], "quando a resposta correta era", i[3])
    
//     print("\n----------------\\\\----------------\n")

//     return
