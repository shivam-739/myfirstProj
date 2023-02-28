const express= require('express')
const mongoose= require('mongoose')
//require("dotenv/config")
const url = 'mongodb+srv://shivam82:chill247@cluster0.nbl4sez.mongodb.net/?retryWrites=true&w=majority'

const index= express()

mongoose.connect(url, {useNewUrlParser:true})
mongoose.connection.on('open', function(){
    console.log("connected to database")
})

index.use(express.json())

const studentRouter = require('./routes/students')
index.use('/students', studentRouter)


index.listen(9000, function (){
    console.log("server started")
})
