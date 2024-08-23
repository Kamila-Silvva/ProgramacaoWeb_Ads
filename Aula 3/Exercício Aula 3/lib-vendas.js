function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    var resultado;
    const vl = parseFloat(document.getElementById('valor').value);
    const parc = parseInt(document.getElementById('parcelas').value);

    // Verifica se os valores são números válidos
    if (!isNaN(vl) && parc > 0) {
        if (parc === 1) {
            // Desconto de 10%
            resultado = vl - (vl * 0.1);
            //document.getElementById('resultado').innerText = `O valor com desconto foi: R$ ${resultado.toFixed(2)}`;
        } else if (parc === 2) {
            // Juros de 5% para 2 parcelas
            resultado = vl + (vl * 0.05);
            //document.getElementById('resultado').innerText = `O valor da parcela com juros: R$ ${(resultado / parc).toFixed(2)}`;
        } else if (parc >= 3) {
            // Juros de 10% para 3 ou mais parcelas
            resultado = vl + (vl * 0.1);
            //document.getElementById('resultado').innerText = `O valor da parcela com juros: R$ ${(resultado / parc).toFixed(2)}`;
        }

        // Se for parcelado, exibe o valor de cada parcela
        if (parc > 1) {
            let parcelaResultado = '';
            let valorParcela = resultado / parc;

            for (let i = 1; i <= parc; i++) {
                parcelaResultado += `Parcela ${i} = R$ ${valorParcela.toFixed(2)}<br>`
            }

            document.getElementById('resultado').innerHTML = `O valor total com juros: R$ ${resultado.toFixed(2)}<br><br>${parcelaResultado}`;
        }
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }
}
