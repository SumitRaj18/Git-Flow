import express from 'express'
const app = express()

app.get('/home',(req,res)=>{
    return res.send('Ok')
})

app.listen(3000,()=>{
    console.log('Server is running at 3000')
})