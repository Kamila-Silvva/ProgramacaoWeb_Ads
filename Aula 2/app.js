function mostrarResultado() {
    var valorOne = parseFloat(document.getElementById('valor').value)
    
    if (!isNaN(valorOne)) {
        const res = (valorOne * 2)
        document.getElementById('resultado').innerText = `O dobro é: ${res}`
    }
    else {
        document.getElementById('resultado').innerText = `Por favor, insira números válidos`
    }
        
}