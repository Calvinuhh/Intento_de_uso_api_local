const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 3000;
let postres = require("./postres.json");

const app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.use(express.text());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("./index.html", __dirname);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

app.get("/postres", (req, res) => {
  res.send(JSON.stringify(postres));
});

app.get("/postres/:id", (req, res) => {
  const id = req.params.id;
  const result = postres.filter(postre => postre.id == id);

  res.send(JSON.stringify(result));
});

app.post("/postres", (req, res) => {
  postres.push(req.body);

  res.send("Añadido con exito!");
});

// app.delete("/postres", (req, res) => {

// });

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
