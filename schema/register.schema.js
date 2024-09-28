const {Schema,model} =  require('mongoose')

const RegisterModel = new Schema({
    username:{
        type:String,
        required :true
    },
   
    email:{
        type:String,
        required :true
    },
    user_group:{
        type:String,
        default:'user'
    },
    password:{
        type:String,
        required :true
    }
    
},{
    timestamps:true,
    versionKey:false
})

module.exports= model('register',RegisterModel)