const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const index = require('./views/index');
// const Sequelize = require("sequelize");
const pg = require("pg");
const { db } = require('./models');

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false}));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.get('/', (req, res) => {
    try {
        res.send('<h1> Hello world!</h1>')
        // res.redirect('/views/index.js');
    } catch(err) {
        console.log(err);
    }
})

app.get














const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}...`);
})