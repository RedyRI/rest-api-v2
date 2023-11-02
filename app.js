const express = require("express");
const { PORT } = require("./src/config/config");
const router = require("./src/routes");
const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}`);
});
