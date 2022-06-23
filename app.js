const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const pg = require("pg");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  try {
    res.redirect("/wiki");
    // res.redirect('/views/index.js');
  } catch (err) {
    console.log(err);
    res.status(404).send("Sorry can't find that!");
  }
});

app.use("/wiki", wikiRouter);

const PORT = process.env.PORT || 3000;

const init = async () => {
  await db.sync({ force: true });
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

// app.listen(PORT, () => {
//   console.log(`App is listening on PORT ${PORT}...`);
// });
