let res = document.getElementById("res");
let numeroMesa = document.getElementById("numeroMesa");
let valorConta = document.getElementById("valorConta");
let quantidadeCliente = document.getElementById("quantidadeCliente");

// Arrays para armazenar os dados
let contas = []; 

function cadastrar() {
    if (numeroMesa.value == "" || valorConta.value == "" || quantidadeCliente.value == "") {
        window.alert("Erro!!! Os campos não foram preenchidos.");
    } else {
        // Calculo do valor por cliente
        let valorPorCliente = Number(valorConta.value) / Number(quantidadeCliente.value);

        // Armazenar os dados da conta
        let novaConta = {
            mesa: Number(numeroMesa.value),
            valorTotal: Number(valorConta.value),
            clientes: Number(quantidadeCliente.value),
            valorPorCliente: valorPorCliente.toFixed(2) 
        };

        // Adiciona a nova conta ao array de contas
        contas.push(novaConta);

        // Atualiza a exibição dos dados
        atualizarExibicao();

        // Limpa os campos do formulário
        numeroMesa.value = '';
        valorConta.value = '';
        quantidadeCliente.value = ''; 
    }
}

function atualizarExibicao() {
    res.innerHTML = ""; 
    res.innerHTML += "<h2>Lista de Contas</h2>";
    res.innerHTML += "<p>Número da mesa | Valor Total | Clientes | Valor por Cliente</p>"; 

    for (let i = 0; i < contas.length; i++) {
        let conta = contas[i];
        res.innerHTML += `<p>${conta.mesa} | R$ ${conta.valorTotal.toFixed(2)} | ${conta.clientes} | R$ ${conta.valorPorCliente}</p>`;
    }
}
