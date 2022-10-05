const express = require("express");
const cors = require("cors");
const path = require("path")
require("dotenv").config()

const app = express();

app.use(cors());

app.use(express.json());

const { postDish, deleteDish, getRandomDish } = require('./controller')

//Local Endpoints

app.post("/api/", postDish)
app.delete("/api/:id", deleteDish)
app.get("/api/random", getRandomDish)

//Heroku Endpoints
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public'))
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
    console.log(path.join(__dirname, '../public/index.html'))
})

app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.css'))
})

app.get("/js", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.js'))
})


const port = process.env.PORT || 5500

app.listen(port, () => console.log(`Server running on ${port}`));