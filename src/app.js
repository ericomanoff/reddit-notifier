const express = require("express");
const app = express();
app.get("/test", (req, res) => {
  res.send({ message: "success" });
});
app.listen(process.env.PORT || 3000);
console.log("Server up and running...");
