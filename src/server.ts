import express, {Request, Response, NextFunction}  from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv';
const app: express.Application = express() 
const path = require('path')
dotenv.config();

const PORT = process.env.PORT || 8080
const uri: string = process.env.MONGO_URI? process.env.MONGO_URI : '' 

app.use(express.json())
mongoose.connect(uri);

app.use('/',express.static(path.join(__dirname,'/build')))
app.use('/api/todos', require('./routes/todos/index'))  

app.listen(PORT,() => {
    console.log("ToDo server is Running at port "  + PORT)
})