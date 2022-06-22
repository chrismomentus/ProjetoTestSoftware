module.exports.baralho3 = function baralho3(entrada) {
    // 1
    var carta, cartas, faltam, i, naipe, ordem, valores;
    cartas = [];

    // 2
    for (var i = 0, _pj_a = entrada.length; i < _pj_a; i += 3) {
        // 3
        cartas.push(entrada.slice(i, i + 3))
    }

    // 4
    cartas.sort();
    valores = ["01", "02", "03", "04", "05", "06", "08", "09", "10", "11", "12", "13"];
    ordem = ["C", "E", "U", "P"];
    faltam = [13, 13, 13, 13];
    i = 0;

    // 5
    for (var valor, _pj_c = 0, _pj_a = valores, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
        // 6
        valor = _pj_a[_pj_c];
        for (var j, _pj_f = 0, _pj_d = [0, 1, 2, 3], _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
        
            // 8
            j = _pj_d[_pj_f];
            naipe = ordem[j];
            carta = cartas[i];

            // 9
            if (carta === valor + naipe) {
                // 10
                if (faltam[j] !== "erro") {
                    // 11
                    faltam[j] = faltam[j] - 1;
                }

                // 12
                i = i + 1;

                // 13
                while (i < cartas.length && cartas[i] === carta) {
                    // 14
                    faltam[j] = "erro";
                    i = i + 1;
                }

                // 15
                if (i === cartas.length) {
                    // 16 FIM
                    return faltam;
                }
            }
        }
    }
    // 7 FIM
}