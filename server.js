const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot Pai e Filho Refrigeração está online!");
});

app.get("/webhook", (req, res) => {
  res.send("Webhook funcionando!");
});

app.post("/webhook", (req, res) => {
  console.log("Mensagem recebida:", req.body);

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
