module.exports.baralho1 = function baralho1(entrada) {
    var cartas, copas, espadas, i, naipe, ouros, paus, valor;
    cartas = [];

    for (var i = 0, _pj_a = entrada.length; i < _pj_a; i += 3) {
        cartas.push(entrada.slice(i, i + 3))
    }
    cartas.sort();
    copas = 13;
    espadas = 13;
    ouros = 13;
    paus = 13;
    valor = "01";
    i = 0;

    while (valor !== "14") {
        while (i < cartas.length && cartas[i].slice(0, 2) === valor) {
        naipe = cartas[i][2];

        if (naipe === "C") {
            copas = copas - 1;
        } else {
            if (naipe === "E") {
            espadas = espadas - 1;
            } else {
            if (naipe === "P") {
                paus = paus - 1;
            } else {
                ouros = ouros - 1;
            }
            }
        }

        i = i + 1;
        }

        valor = (Number.parseInt(valor) + 1).toString();

        if (valor.length === 1) {
        valor = "0" + valor;
        }
    }

    return [copas, espadas, ouros, paus];
}

module.exports.baralho2 = function baralho2(entrada) {
    var cartas, chave, faltam, qtd;
    cartas = {
        "C": [],
        "E": [],
        "U": [],
        "P": []
    };

    for (var i = 0, _pj_a = entrada.length; i < _pj_a; i += 3) {
        chave = entrada[i + 2];
        cartas[chave].push(Number.parseInt(entrada.slice(i, i + 2)));
    }

    faltam = {
        "C": 13,
        "E": 13,
        "U": 13,
        "P": 13
    };

    for (var naipe, _pj_c = 0, _pj_a = ["C", "E", "U", "P"], _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        naipe = _pj_a[_pj_c];

        for (var valor = 1, _pj_d = 13; valor < _pj_d; valor += 1) {
        qtd = cartas[naipe].filter(x => x === valor).length;

        if (qtd > 1) {
            faltam[naipe] = "erro";
        } else {
            if (qtd === 1 && faltam[naipe] !== "erro") {
            faltam[naipe] -= 1;
            }
        }
        }
    }

    return faltam;
}

module.exports.baralho3 = function baralho3(entrada) {
    var carta, cartas, faltam, i, naipe, ordem, valores;
    cartas = [];

    for (var i = 0, _pj_a = entrada.length; i < _pj_a; i += 3) {
        cartas.push(entrada.slice(i, i + 3))
    }

    cartas.sort();
    valores = ["01", "02", "03", "04", "05", "06", "08", "09", "10", "11", "12", "13"];
    ordem = ["C", "E", "U", "P"];
    faltam = [13, 13, 13, 13];
    i = 0;

    for (var valor, _pj_c = 0, _pj_a = valores, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        valor = _pj_a[_pj_c];

        for (var j, _pj_f = 0, _pj_d = [0, 1, 2, 3], _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
        j = _pj_d[_pj_f];
        naipe = ordem[j];
        carta = cartas[i];

        if (carta === valor + naipe) {
            if (faltam[j] !== "erro") {
            faltam[j] = faltam[j] - 1;
            }

            i = i + 1;

            while (i < cartas.length && cartas[i] === carta) {
            faltam[j] = "erro";
            i = i + 1;
            }

            if (i === cartas.length) {
            return faltam;
            }
        }
        }
    }
}