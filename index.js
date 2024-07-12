const express=require('express')
const app=express()

app.get('/', (req,res)=>{
    res.send('Hello Express!')
})

app.get('/welcome', (req,res)=>{
    res.send('Boas vindas à missão ExpressJS')
})

app.get('/mission', (req,res)=>{
    res.send('Essa é a missão de ExpressJS!')
})

app.listen(3000)