const express = require('express') 
require('dotenv').config()
const {OpenAI}  = require('openai')
const dallerouter = express.Router() ; 

const openai = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY
})
   
dallerouter.get('/' , (req ,res)=>{
    res.status(400).json('HELLO AGAIN')
})

dallerouter.post('/' , async (req , res)=>{

    try{
       const {prompt} = req.body

        // if(!up || !uq || isNaN(uq)){
        //     return res.status(400).json({
        //         message:'enter correct data'
        //     })
        // }
    
        const aiResponse =   await openai.images.generate({
           prompt,
            n:1 , 
            
            size:'1024x1024' ,
            response_format : 'b64_json'  
        })

        const image = aiResponse.data.data[0].b64_json;  

        res.status(200).json({photo:image}) ;  

    }
    catch(err){
        return res.status(500).json({
            error:{...err}
        })
    }
  

    }

  
)

module.exports = dallerouter