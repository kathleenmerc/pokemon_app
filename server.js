const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")
const reactViews = require("express-react-views")

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next)=> {
    console.log("Middleware is Running for all routes")
    next()
})

app.use(express.urlencoded({extended:false}));

//HOMEPAGE
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

//INDEX
app.get("/pokemon", (req, res) => {
    //res.send(pokemon)
    res.render("Index", pokemon)
})

app.get("/pokemon/new", (req, res) => {
    res.render("New")
})

//CREATE
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon")
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    //res.send(req.params.id)
    res.render("Show", pokemon[req.params.id])
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})