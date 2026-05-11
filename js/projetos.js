document.addEventListener("DOMContentLoaded", () => {
    const projetosContainer = document.getElementById("projetos-container");

    fetch('../data/projetos.json')
        .then(response => response.json())
        .then(projetos => {
            projetos.forEach(projeto => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${projeto.img}" alt="${projeto.titulo}">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.desc}</p>
                `;

                projetosContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os projetos:', error));
});