const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 3000;

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
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
