let div = document.querySelector(".contenedor");

let btn = document.querySelector(".boton");

function mostrarPostres() {
  fetch("./postres.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        let newElement = document.createElement("div");
        newElement.innerHTML = `
            <div class="imagen">
            <img
            src="${element.img}"
            alt="postre${element.id}"
            />
            <p class="parrafo">${element.name}</p>
            </div>
            `;
        div.appendChild(newElement);

        btn.disabled = true;
      });
    });
}
btn.addEventListener("click", mostrarPostres);
