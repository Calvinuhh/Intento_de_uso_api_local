const url = "http://localhost:3000";

var contador;
fetch(`${url}/postres`)
  .then((info) => info.json())
  .then((info) => {
    contador = info.length;
  });

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombrePostre = document.getElementById("nameInput").value;
  const imgRuta = document.getElementById("imgInput").value;
  const imgRutaFinal = `./pics/IMG_${imgRuta}.PNG`;

  const data = {
    name: nombrePostre,
    id: contador + 1,
    img: imgRutaFinal,
  };
  const dataJson = JSON.stringify(data);

  fetch(`${url}/postres`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: dataJson,
  });
  alert(`Has agregado "${nombrePostre}" exitosamente`);
});

//  Para agregar postres escribir unicamente el nombre del postre y
//  el numero de la imagen, ejemplo: 3312, se esta concatenado
//  el nombre del archivo de la imagen, solo hay que agregar el numero

// {
//   "name": "Postre de vainilla",
//   "id": 4,
//   "img": "./pics/IMG_3312.PNG"
// }

// {
//   "name": "Postre de chocolate",
//   "id": 5,
//   "img": "./pics/IMG_3322.PNG"
// }

// {
//   "name": "Mufins navideños",
//   "id": 6,
//   "img": "./pics/IMG_3323.PNG"
// }
