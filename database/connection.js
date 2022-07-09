const moongoose =  require('mongoose')

async function connectDB() {
     try{
         moongoose.connect('mongodb://localhost:27017/EverestWalk')
         console.log('successful')
     }catch(err){
         console.log(err)
     }
}
module.exports = connectDB