const url = "http://localhost:3000";

const formulario = document.getElementById("formulario");
let contador = 3;
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  contador++;

  let nombrePostre = document.getElementById("nameInput").value;
  let imgRuta = document.getElementById("imgInput").value;
  let imgRutaFinal = `./pics/IMG_${imgRuta}.PNG`;
  let id = contador;
  let data = { name: nombrePostre, id: id, img: imgRutaFinal };
  let dataJson = JSON.stringify(data);

  fetch(`${url}/postres`, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: dataJson,
  });
});
