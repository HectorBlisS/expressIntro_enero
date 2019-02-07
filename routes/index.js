let router = require('express').Router()

router.get('/', (req,res)=>{
    res.send("Holi 🥶")
})

module.exports = router