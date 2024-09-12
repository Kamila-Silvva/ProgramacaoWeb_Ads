    let res = document.getElementById("res");
    let numeroMesa = document.getElementById("numeroMesa");
    let valorConta = document.getElementById("valorConta");
    let quantidadeCliente = document.getElementById("valorConta");

    // arrays
    let mesa = [];
    let conta = [];
    let divisaoCliente = [];
    let valorUnitario = [];

function cadastrar() { //btn cadastrar

    if (numeroMesa.value == "" || valorConta.value == "" || quantidadeCliente == "") {
        window.alert("Erro!!! Os campos não foram preenchidos.");
    } else {
        valorUnitario.push(valorConta.value / quantidadeCliente); //pucha o valor para a variável
        mesa.push(numeroMesa.value);
        conta.push(valorConta.value);
        divisaoCliente.push(divisaoCliente.value)
        res.innerHTML = ""; // zara a tabela para que não haja itens duplicados
        res.innerHTML += "<p>Id</p><p>Nome mesa</p><p>Valor</p> <p>valorUnitario</p>"; // cabeçalho
        for (i = 0; i < mesa.length; i++) {// estrutura que mostra a tabela
            let o = i + 1;
            res.innerHTML += `<p>${o}</p><p>${mesa[i]}</p><p>R$${conta[i].toFixed(2)}</p><p>R$${valorUnitario[i].toFixed(2)}</p>`;
        }
        numeroMesa.value = '';
        valorConta.value = '';
        preventDefault() // essa função faz com que o o botão não haja naturalmente, seu evento padrão não acontece, ou seja, era pra ele mandar para outra página, e para que isso não aconteça, usamos essa função do js
    }
}

function limpar() {// zera todas as variáveis
            res.innerHTML = "";
            mesa = [];
            conta = [];
            valorUnitario = [];
            divisaoCliente = [];

            preventDefault();
        }

        function removerAnterior() {
            mesa.pop();// função usada para remover o ultimo valor dentro de um array
            conta.pop();
            valorUnitario.pop();
            divisaoCliente.pop();
            res.innerHTML = "";
            res.innerHTML += "<p>Nome mesa</p><p>Valor</p><p>Valor por Cliente</p>";
            for (i = 0; i < mesa.length; i++) {
                let o = i + 1; // para mostrar a pessoa com o indice 0 mostrando o id
                res.innerHTML += `<p>${o}</p><p>${mesa[i]}</p><p>R$${conta[i].toFixed(2)}</p><p>R$${valorUnitario[i].toFixed(2)}</p>`; // toFixed(2) --> mostra somente duas casas decimais após a virgula
            }

            preventDefault();

}
