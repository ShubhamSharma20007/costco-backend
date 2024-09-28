
const jwt = require('jsonwebtoken')
const auth = (req,res,next)=>{
    const {authorization} =  req.headers
    if(authorization && authorization.split(" ")[0] == "Bearer"){
        const token= authorization.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                console.log('not authorized')
            }
            else{
                req.currentUser = decode
            }
            next()
        })
    }
    else{
        res.send('not authorized')
    }

}

module.exports =  auth