/*
    Utilizando a biblioteca JEST.
    Testar o codigo escada3
*/

const index = require('./index');

 let N = 4
 let M = 6

 var matriz =   [[4, 6, [[1, 2, 9, 9, 9, 9],[0, 1, 2, 3, 4, 5],[0, 0, 1, 2, 3, 4],[0, 0, 0, 1, 2, 3]], "S"],
                [5, 5, [[1, 2, 9, 9, 9],[0, 1, 2, 3, 4],[0, 1, 1, 2, 3],[0, 0, 0, 1, 0], [0, 0, 0, 0, 0]], "N"],
                [5, 8, [[0, 5, 9, 9, 9, 2, 2, 0],[0, 0, 0, 0, 4, 0, 1, 2],[0, 0, 0, 0, 0, 0, 3, 2],[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], "N"],
                [3, 3, [[5, 3, 1 ],[0, 8, 3],[0, 0, 5]], "S"]];

const reorderList = matriz.map(item => {
    return [item[0], item[1], item[2], item[3]];
});

//console.log(reorderList);

test.each(reorderList)('Should Run Escada3 with matrix dimension of \"%s\" \"%s\" and matrix \"%s\" should result to \"%s\"',(N, M, matriz, expectedResult) =>{
    expect(index.escada3(N,M, matriz)).toStrictEqual(expectedResult);
});