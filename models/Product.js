let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: String,
    gallery:[String]

}, {timestamps:true})

module.exports = mongoose.model('Product', productSchema)