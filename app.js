const express = require('express');
const mongoose = require('mongoose');
//import router
const tasksRoutes = require('./routes/taskRoutes')

const app = express();
const port = 4000;

//middleware 
app.use(express.json())

//DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin');

const dp = mongoose.connection;

dp.on('error',()=>{
    console.log('Connection Error!')
})

dp.once('open',()=>{
    console.log('Connected To Database !')
})


//End point
app.use(tasksRoutes)


app.listen(port,() => {
    console.log('Application running successfuly')
});
