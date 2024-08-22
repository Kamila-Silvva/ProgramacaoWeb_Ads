function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    var resultado;
    const vl = parseFloat(document.getElementById('valor').value);
    const parc = parseInt(document.getElementById('parcelas').value);
    
    if (!isNaN(vl)) {
        if(parc <=1){
            resultado =vl- (vl*0.1);
            document.getElementById('resultado').innerText = `O valor com desconto foi: (${(resultado).toFixed(2)}`;
        }
      else 
      if (!isNaN(vl)) {
        if(parc ===2){
            resultado =vl+ (vl*0.05);
            document.getElementById('resultado').innerText = `O valor da parcela com juros: ${(resultado/parc).toFixed(2)}`;
        }
        else 
        if (!isNaN(vl)) {
          if(parc >=3){
              resultado =vl+ (vl*0.1);
              document.getElementById('resultado').innerText = `O valor da parcela com juros: ${(resultado/parc).toFixed(2)}`;
          }
        }
    }
     else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }

    for (var i = 1; 1 <= parc; i++) {
        resultado += `Parcela ${i} = R$ ${resultado/parc.toFixed(2)}<br>`
        document.getElementById('resultado').innerHTML = resultado;
    }

    

}
}