const express = require('express') 
require('dotenv').config()
const dallerouter = require('./src/routes/dalle/dalle.router')
const cloudinary = require('cloudinary').v2
const cors =require('cors')
const morgan = require('morgan')
const postRouter = require('./src/routes/post/post.router')
const connectDB = require('./src/mongodb/connect')
const app = express() ; 


 const PORT = process.env.PORT  

//  app.use(
//   cors({
//     origin: "http://localhost:5173/",
//   })
// );

app.use(cors()) ; 

  app.use(morgan('combined'))
  app.use(express.json({limit:'50mb'}))

  app.use('/api/v1/dalle' , dallerouter)
  app.use('/api/v1/post', postRouter)
  app.use('/' , (req , res)=>{
    res.status(200).json({
        message:'HELLO ONCE AGAIN'
    })
  })
  const startServer = async () =>{
    try{
        connectDB(process.env.MONGODB_URL) 
    }catch(error){
        console.log(error) ;
    }
    app.listen(8080,()=>{
        console.log('Server started on https://localhost:8080')
        //was storing .env variables as  : instead of =
        console.log(process.env.MONGODB_URL) ; 
    }) ; 

}
startServer()
