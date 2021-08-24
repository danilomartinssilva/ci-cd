const express = require('express')
const cors = require('cors')


const mockData = require('./mockData')

const app = express()
const port = process.env.port || 4000

app.use(cors())

app.get('/',(req,res)=>res.send('Api Word'))

app.get('/all',(req,res)=>{
  
  return res.json(mockData)
})


app.listen(port,()=>{
  console.log('Servidor funcionando sob a porta: '+port)
})