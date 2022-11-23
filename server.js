require('dotenv').config()

const express = require("express")
const app = express()
const PORT = 3000
const Pokemon = require("./models/pokemon")
const reactViews = require("express-react-views")
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once("open", () => {
    console.log("Connected to mongoDB")
})

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next)=> {
    console.log("Middleware is Running for all routes")
    next()
})

// Returns middleware that only parses URL-encoded data
app.use(express.urlencoded({extended:false}));

//HOMEPAGE
app.get("/", (req, res) => {
    res.render("Homepage")
})

//INDEX
app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        if (!error) {
            res.status(200).render("Index", { pokemon: allPokemon })
        } else {
            res.status(400).send(error)
        }
    })
})

app.get("/pokemon/new", (req, res) => {
    res.render("New")
})

//CREATE
app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        if (!error) {
            console.log(createdPokemon)
            res.status(200).redirect("/pokemon")
        } else {
            res.status(400).send(error)
        }
    })
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if (!error) {
            res.status(200).render("Show", { pokemon: foundPokemon })
        } else {
            res.status(400).send(error)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

