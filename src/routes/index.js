const { Router } = require("express");
const fs = require("node:fs");
const router = Router();
const PATH_FILE = __dirname;

const removeExt = (file) => file.split(".").shift();

fs.readdirSync(PATH_FILE).forEach((file) => {
  const filename = removeExt(file);
  if (filename !== "index") {
    router.use(`/${filename}`, require(`./${filename}`));
  }
});

module.exports = router;
