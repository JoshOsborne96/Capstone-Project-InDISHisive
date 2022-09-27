const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { postDish, deleteDish, getRandomDish } = require('./controller')

//Endpoints

app.post("/api/", postDish)
app.delete("/api/:id", deleteDish)
app.get("api/randomDish", getRandomDish)


app.listen(5500, () => console.log("Server running on 5500"));