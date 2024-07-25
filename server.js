const express = require("express")

const app = express()
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name

    res.send(`Hello There, ${name}! What a lovely feeling to see you back here ${name }`)
})

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number)
    if(number){
        randomNum = Math.floor(Math.random() * (number + 1))
        res.send(`You Rolled ${randomNum}`)
    }else {
        res.send(`You must specify a number`)
    }
})

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index
    const item = collectibles[index]
      if(!item){
        res.send('This item is not yet in stock. Check back soon!')
      }else {
        res.send(`So you want the ${item.name} for ${item.price}, it can be yours!`)
      }
})
app.get('/shoes', (req, res) => {
    const minPrice = parseFloat(req.query.minPrice)
    const maxPrice = parseFloat(req.query.maxPrice)
    const type = req.query.type
    const name = req.query.name
    let copyshoes = [...shoes]

    if(type){
        copyshoes = copyshoes.filter(shoe => shoe.type === type)
    }
    if(minPrice){
        copyshoes = copyshoes.filter(shoe => shoe.price >= minPrice)
    }
    if(maxPrice){
        copyshoes = copyshoes.filter(shoe => shoe.price <= maxPrice)
    }
    if(name){
        copyshoes = copyshoes.filter(shoe => shoe.name === name)
    }

    res.send(copyshoes)
    
})
app.listen(3050, ()  => {
    console.log("listening on port 3050")
})