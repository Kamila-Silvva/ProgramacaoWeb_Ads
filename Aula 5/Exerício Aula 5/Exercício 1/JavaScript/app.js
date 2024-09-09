    let res = document.getElementById("res");
    let nomeCliente = document.getElementById("nomeCliente");
    let valorEmprestimo = document.getElementById("valorEmprestimo");

    // arrays
    let cliente = [];
    let emprestimo = [];
    let juros = [];

function cadastrar() { //btn cadastrar

    if (nomeCliente.value == "" || valorEmprestimo.value == "") {
        window.alert("Erro!!! Nome do Cliente ou Valor do Empréstimo não foram preencidos");
    } else {
        let valor = Number(valorEmprestimo.value)
        let calculoJuros = valor * 0.05
        cliente.push(nomeCliente.value);
        emprestimo.push(Number(valorEmprestimo.value));
        juros.push(calculoJuros)
        res.innerHTML = ""; // zara a tabela para que não haja itens duplicados
        res.innerHTML += "<p>Id</p><p>Nome cliente</p><p>Valor</p> <p>juros</p>"; // cabeçalho
        for (i = 0; i < cliente.length; i++) {// estrutura que mostra a tabela
            let o = i + 1;
            res.innerHTML += `<p>${o}</p><p>${cliente[i]}</p><p>R$${emprestimo[i].toFixed(2)}</p><p>R$${juros[i].toFixed(2)}</p>`;
        }
        nomeCliente.value = '';
        valorEmprestimo.value = '';
        preventDefault() // essa função faz com que o o botão não haja naturalmente, seu evento padrão não acontece, ou seja, era pra ele mandar para outra página, e para que isso não aconteça, usamos essa função do js
    }
}

function limpar() {// zera todas as variáveis
            res.innerHTML = "";
            cliente = [];
            emprestimo = [];
            juros = [];

            preventDefault();
        }

        function removerAnterior() {
            juros.pop();

            cliente.pop();// função usada para remover o ultimo valor dentro de um array
            emprestimo.pop();
            res.innerHTML = "";
            res.innerHTML += "<p>Id</p><p>Nome cliente</p><p>Valor</p> <p>juros</p>";
            for (i = 0; i < cliente.length; i++) {
                let o = i + 1; // para mostrar a pessoa com o indice 0 mostrando o id
                res.innerHTML += `<p>${o}</p><p>${cliente[i]}</p><p>R$${emprestimo[i].toFixed(2)}</p><p>R$${juros[i].toFixed(2)}</p>`; // toFixed(2) --> mostra somente duas casas decimais após a virgula
            }

            preventDefault();
}
