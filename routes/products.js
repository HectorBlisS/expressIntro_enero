let router = require('express').Router()
let Product = require('../models/Product')

//formularios
// 2 piezas 
// pieza numero 1 : el dibujo del formulario (get)
router.get("/new", (req,res)=>{
    res.render("form")
})
// pieza numero 2: recibimos la info del formulario (post)
router.post("/new", (req, res)=>{
    Product.create(req.body)
    .then(product=>{
        res.redirect('/products/' + product._id)
    })
    .catch(e=>{
        console.log(e)
        res.send(e)
    })
})

//vista de detalle
router.get('/:id', (req,res)=>{
    console.log(req.query)
   Product.findById(req.params.id)
   .then(product=>{
        req.app.locals.titulo = product.name
       res.render("detalle", product)
   })
   .catch(e=>{
       console.log(e)
       res.send(e)
   })
})

//vista de lista
router.get('/', (req,res)=>{
    req.app.locals.titulo = "Probando"
    Product.find()
    .then(products=>{
        res.render("lista", {products})
    })
    .catch(e=>res.send(e))
})

module.exports = router