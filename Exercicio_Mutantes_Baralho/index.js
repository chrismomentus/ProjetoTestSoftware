module.exports.baralho3Correto = function baralho3Correto(entrada) {
    let cartas = [];

    for (let i = 0; i < entrada.length; i += 3) {
        cartas.push(entrada.slice(i, i + 3))
    }

    cartas.sort();
    console.log(cartas);
    let valores = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
    let ordem = ["C", "E", "P", "U"];
    let faltam = [13, 13, 13, 13];
    let k = 0;

    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i];

        for (let j = 0; j < ordem.length; j++) {
            const naipe = ordem[j];
            let carta = cartas[k];
            
            if(carta == valor + naipe){
                if(faltam[j] !== "erro"){
                    faltam[j] -= 1;
                }
                
                let m = k + 1;
                while (m < cartas.length && cartas[m] === carta) {

                    faltam[j] = "erro";
                    m++;
                    k++;
                    k = k % cartas.length;
                }

                k++;
                k = k % cartas.length;
            }

        }

        
        
    }

    return [faltam[0], faltam[1], faltam[3], faltam[2]];
}

// const index = require('./');
// console.log(index.baralho3Correto("04C05C06C07C08C10E11E12E13E01E07U08U09U10U11U02P03P04P"))

/*
1-
Reachability: True
Infection: cartas != []
Propagation: Impossível, já que esse valor não interfere no fluxo do for

2-
Reachability: True
Infection: i = valores.length
Propagation: Impossível, já que o valor undefined não altera os valores corretos da variável faltam

3-
Reachability: True
Infection: j = ordem.length
Propagation: Impossível, já que o valor undefined não altera os valores corretos da variável faltam

4-
Reachability: carta == valor + naipe
Infection: m < cartas.length == false
Propagation: Impossível, Já que quando essa infecção ocorre, cartas[m](undefined) nunca será igual a carta(que não é undefined)

5-
Reachability: carta == valor + naipe
Infection: m = cartas.length
Propagation: Impossível, já que o valor undefined não altera o fluxo, pelo mesmo motivo do (4)
*/