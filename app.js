let express = require('express')
let mongoose = require('mongoose')
let path = require('path')
let port = 3000
let bodyParser = require('body-parser')
let app = express()


mongoose.connect('mongodb://localhost:27017/blissito', { useNewUrlParser: true })

app.use(express.static('public'))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }));

let index = require('./routes/index')
let products = require('./routes/products')
app.use('/products', products)
app.use('/', index)

//module.exports = app

app.listen(port, e=>{
    if(e) console.log(e)
    else console.log("Corriendo 🥰")
})