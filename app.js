function pesquisar() { // Função que será executada quando o botão de pesquisar for clicado
    let section = document.getElementById("resultado") // Pega a seção "resultado" do HTML pelo ID
    console.log(section); // Mostra a variável no console (F12)

    let resultados = "";

    // Para cada dado dentro da lista de dados
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p>${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `
    };

    section.innerHTML = resultados; // Adiciona na página HTML a variável "resultados"
}