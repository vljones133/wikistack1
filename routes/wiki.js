const wikiRouter = require("express").Router();
const { addPage } = require("../views");
const { wikiPage } = require("../views/wikiPage");

wikiRouter.get("/", (req, res) => {
  res.send("<h1>YOU'RE AT WIKI</h1>");
});

wikiRouter.post("/", (req, res) => {
  res.send(addPage());
});

wikiRouter.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = wikiRouter;
