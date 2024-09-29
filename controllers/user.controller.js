const mongoose =  require('mongoose')
const bcrypt = require('bcryptjs')
const RegisterModel = require('../schema/register.schema.js')
const jwt = require('jsonwebtoken')

// register
const registerRoute = async(req,res)=>{
    const {username,password,email} = req.body
    try {
        if(!username || !password || !email ){
            return res.status(401).json({success:false,message:'all field are required !'})
        }

        const user = await RegisterModel.findOne({email})
        if(user){
            return res.status(401).json({success:false,message:'user already exist'})
        }

        // bcrypt passs
        const bcryptPass = await bcrypt.hash(password,10)

        const register = new RegisterModel({
            username,
            password:bcryptPass,
            email,

        })
        await register.save();

        res.status(201).json({success:true,message:'user registered successfully'})
       
        
    } catch (error) {
        res.status(501).json({success:false,message:error.message})
    }

}

// login
const loginRoute = async(req,res)=>{

    const {email,password} = req.body
   

    try {

        if(!email || !password){
            return res.status(401).json({success:false,message:'all field are required !'})
        }

        const user = await RegisterModel.findOne({email})

        if(!user){
            return res.status(401).json({success:false,message:'user not found'})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(401).json({success:false,message:'wrong password'})
        }
        const token = jwt.sign({user},process.env.JWT_SECRET)
        res.status(201).json({success:true,token})
    }
    catch(err){
        res.status(501).json({success:false,message:err.message})
    }

}

module.exports = {registerRoute,loginRoute}