const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
app.get("/", async (req, res) => {
  res.send("Vanakkam makkaley");
});

app.get("/json", async (req, res) => {
  res.send({ message: "reply vandhutan da" });
});
