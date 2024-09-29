require('dotenv').config()
const express =  require('express')
const app =  express()
const cors = require('cors')
const connectionDB =  require('./db/connection.js')
const userRouter = require('./routes/user.route.js')
const cartRouter = require('./routes/cart.route.js')
connectionDB()



//  for handling the json data 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// routes
app.use('/v1/api/user',userRouter)
app.use('/v1/api/cart',cartRouter)




const port = process.env.PORT || 4001
app.listen(port,()=>console.log(`server is listing ${port} ✅`))



