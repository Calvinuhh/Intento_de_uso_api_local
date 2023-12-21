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
      "content-type": "application/JSON",
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
