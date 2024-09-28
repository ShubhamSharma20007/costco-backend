const express =  require('express')
const router = express.Router()
const auth = require('../middleware/auth.js')
const {registerRoute,loginRoute} = require('../controllers/user.controller.js')


router.post('/register',registerRoute)
router.post('/login',loginRoute)
router.get('/get-user-info',auth,(req,res)=>{
    const{currentUser:{user}} = req
  if(!user){
      return res.status(401).json({success:false,message:'user not found'})
  }

  res.status(201).json({success:true,user})

})


module.exports =router


