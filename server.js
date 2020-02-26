const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
  console.error("Erro: " + error.message);
});

app.set("port", process.env.PORT || 7777);

const server = app.listen(app.get("port"), () => {
  console.log("Servidor rodando na porta: " + server.address().port);
});
