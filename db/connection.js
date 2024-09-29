const mongoose =  require('mongoose')

const connectionDB =()=>{
    try {
     mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true
     })
     .then(res=>console.log('connected ✔️'))
    .catch(err=>console.log(err))
        
    } catch (error) {
        console.log(error)
    }
}

module.exports =  connectionDB


