const express =  require('express')
const router = express.Router()

const { addToCart,removeToCart,getCart,clearCart } = require('../controllers/cart.controller.js')


// post request
router.post('/add-to-cart',addToCart)
router.delete('/remove-to-cart/:id',removeToCart)
router.get('/get-cart/:userId',getCart)
router.delete('/remove-all-cart/:userId',clearCart)




module.exports = router