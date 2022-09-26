const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { postDish, deleteDish } = require('./controller')

//Endpoints

app.post("/api/", postDish)
app.delete("/api/:id", deleteDish)


app.listen(5500, () => console.log("Server running on 5500"));