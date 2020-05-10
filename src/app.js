const express = require("express");
const app = express();
const routes = require("./routes");

app.use(routes);
const port = process.env.PORT || 80;
app.listen(port);

console.log(`Server up and running on port ${port}`);
