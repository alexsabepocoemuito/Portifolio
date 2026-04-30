document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${projeto.img}" alt="${projeto.titulo}">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.desc}</p>
    `;

    container.appendChild(card);
  });
});