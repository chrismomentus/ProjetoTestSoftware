/*
    Utilizando a biblioteca JEST.
*/

const index = require('./index');

// Lista com os lados e o gabarito para o baralho3
const listaDeInputs = [["", [13,13,13,13], "CT1"], ["13P13P", [13,13,13,"erro"], "CT2"],
["12P12P13P", [13,13,13,"erro"], "CT3"], ["02C02C02C03C13P", ["erro",12,13,12], "CT4"]];

const reorderList = listaDeInputs.map(item => {
    return [item[2], item[1], item[0]]
});

test.each(reorderList)('Should Run Baralho3 with test case %s and result in \"%s\"', (ctLabel, expectedResult, firstArg) => {
    expect(index.baralho3(firstArg)).toStrictEqual(expectedResult);    
  });

