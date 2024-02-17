const url = "http://localhost:3000";
let div = document.querySelector(".contenedor");
let btn = document.querySelector(".boton");

function mostrarPostres() {
  div.innerHTML = "";

  fetch(`${url}/postres`)
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
      });
    });
}

btn.addEventListener("click", mostrarPostres);
