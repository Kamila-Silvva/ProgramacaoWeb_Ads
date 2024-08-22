function calculandoDesconto(){
    var valorCompra = parseFloat(document.getElementById('valor').value)

    if (!isNaN(valorCompra) && valorCompra > 0) {
        var valorComDesconto

        if (valorCompra <= 300) {
            var descontoOne = valorCompra * (5 / 100)
            valor = valorCompra - descontoOne
        } else {
            var descontoTwo = valorCompra * (10 / 100)
            valorComDesconto = valorCompra - descontoTwo
        }
        document.getElementById('Resultado').innerText = `O valor da compra com desconto é: ${valorComDesconto}`;
    } else {
        document.getElementById('Resultado').innerText = `O valor inserido e inválido`
    }
}
