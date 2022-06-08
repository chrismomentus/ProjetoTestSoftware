/*
    Utilizando a biblioteca JEST.
*/

const index = require('./index');

// Lista com os lados e o gabarito
const listaDeInputs = [
  ["11P01C02C01U02U03U04U", [11,13,9,12], "CT1"],
  ["13P02P01P03P04P05P06P07P08P09P10P11P12P", [13,13,13,0], "CT2"],
  ["01C02C03C04C05C07C09C10C11C02E02E03E11U", [4,"erro",12,13], "CT3"], 
  ["01C02C03C04C05C06C07C08C09C10C11C12C01E02E03E04E05E06E07E08E09E10E11E03U04U05U06U07U08U09U10U04P05P06P07P08P09P10P01E", [1,2,5,6], "CT4"],
  ["01C02C03C04C05C06C09E10E11E08U09U10U01P02P", [7,9,10,2], "CT5"], 
  ["01C02C03C04C05C06C07C08C09C10C04E05E06E07E08E09E10E11E12E13E02U03U04U05U06U07U08U09U10U11U02P03P04P05P06P07P08P09P10P11P", [3,3,3,3], "CT6"],
  ["04C05C06C07C08C10E11E12E13E01E07U08U09U10U11U02P03P04P", [8, 8, 7, 10], "CT7"], 
  ["09C10C11C12C12U13U01E02E03E04E05E06E12P13P12P13P", [9, 7, 11, "erro"], "CT8"], 
  ["06P07P08P09P10P11P12P13P03C04C05C06C06E07E08E09E10E11E12E07C08C09C02U03U04U05U06U07U08U09U10U10C", [5, 6, 4, 5], "CT9"], 
  ["07C08C09C02E03E04E05E06E07E08E09E10C11C01U02U03U04U05U06U07U12C13C05P06P07P08P09P10P11P12P13P", [6, 5, 6, 4], "CT10"], 
  ["08C09C10C02E03E04P05P06P07P09U10U11U12U13U", [10, 11, 8, 9], "CT11"], 
  ["03C04C05C06C07C08C09C10C11C12C01E02E01P02P03P04P05P07P08P09P10P11P12P13P03E04E05E06E07E08E09E01U02U03U04U05U06U08U09U10U11U13U10E11E12E13C", [2,1,2,1], "CT12"], 
  ["13C12E01U02U03U04U05U06U07U08U09U10U11U12U13U03P04P05P06P07P", [12, 12, 0, 8], "CT13"], 
  ["01C02C03C04C05C06C07C09E10E13U11E08C09C10C11C12C13C09U10U11U12U13U08P09P10P11P12P13P", [0, 10, "erro", 7], "CT14"],
  ["07C08C09C03P04P05P06P07P08P09P10P11P12P13P10C03E04E05E06E07E08E09E10E11E10C01U02U03U04U05U06U07U08U09U10U11U12U", ["erro", 4, 1, 2], "CT15"], 
  ["01E13C02E03E04E05E06E07E08E10U09E10E11E12E13E13P", [12, 0, 12, 12], "CT16"]
];

const reorderList = listaDeInputs.map(item => {
    return [item[2], item[1], item[0]]
});

// Usando a função adequada do Jest o código fica ainda mais clean.
test.each(reorderList)('Should Run Baralho1 with test case %s and result in \"%s\"', (ctLabel, expectedResult, firstArg) => {
  expect(index.baralho1(firstArg)).toStrictEqual(expectedResult);    
});

test.each(reorderList)('Should Run Baralho2 with test case %s and result in \"%s\"', (ctLabel, expectedResult, firstArg) => {
    const funcResult = index.baralho2(firstArg);
    arrayForComparison = [funcResult["C"], funcResult["E"], funcResult["U"], funcResult["P"]];
    expect(arrayForComparison).toStrictEqual(expectedResult);    
  });

test.each(reorderList)('Should Run Baralho3 with test case %s and result in \"%s\"', (ctLabel, expectedResult, firstArg) => {
    expect(index.baralho3(firstArg)).toStrictEqual(expectedResult);    
  });

