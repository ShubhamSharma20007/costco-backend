const mongoose =  require('mongoose')
const CartModel =  require('../schema/cart.schema.js')


//  add to cart
const addToCart =async(req,res)=>{

    try {
        await CartModel.create({...req.body})

        res.status(201).json({success:true,message:'added to cart'})
    } catch (error) {
        res.status(501).json({success:false,message:error.message})
    }
}

// remove to cart
const removeToCart = async(req,res)=>{
    const {id} = req.params;
    try {
        const removeProduct = await CartModel.findByIdAndDelete(id);

        if(!removeProduct){
            return res.status(401).json({success:false,message:'product not found'})
        }

        res.status(201).json({success:true,message:'product removed from cart'})
    } catch (error) {
        res.status(501).json({success:false,message:error.message})
    }
}


// get cart
const getCart = async(req,res)=>{
  
    try {
        const {userId} = req.params
        const cart = await CartModel.find({userId})

        res.status(201).json({success:true,cart})


    } catch (error) {
        res.status(501).json({success:false,message:error.message})
    }
   
}


// clear cart by userId
const clearCart = async(req,res)=>{
    try {
        const {userId} = req.params
        const cart = await CartModel.deleteMany({userId})
        res.status(201).json({success:true,cart})
    } catch (error) {
        res.status(501).json({success:false,message:error.message})
        
    }
}

module.exports ={addToCart,removeToCart,getCart,clearCart}