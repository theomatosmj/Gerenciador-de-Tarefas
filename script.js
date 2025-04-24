let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if (tarefa === "") {
        mensagem.textContent = "Digite uma tarefa para adicioná-la à sua lista!"
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!"
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
    atualizarVisibilidadeBotaoLimpar()
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
    atualizarVisibilidadeBotaoLimpar()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:", tarefas[i])
    if (tarefaEditada && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada.trim()
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
    atualizarVisibilidadeBotaoLimpar()
}

function atualizarVisibilidadeBotaoLimpar() {
    const botaoLimpar = document.getElementById("botaoLimpar")
    if (tarefas.length > 0) {
        botaoLimpar.style.display = "inline-block"
    } else {
        botaoLimpar.style.display = "none"
    }
}
