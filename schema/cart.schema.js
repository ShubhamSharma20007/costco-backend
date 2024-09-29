    const {Schema,model} =  require('mongoose')

    const CartModel = new Schema({
    image:String,
    Price:String,
    title:String,
    description:String,
    userId:{
        type:Schema.Types.ObjectId,
        ref:'register',
    }       
    },{
        timestamps:true,
        versionKey:false
    })

    module.exports= model('cart',CartModel)