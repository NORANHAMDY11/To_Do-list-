const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title : {type : String , require: true },
    descripton : { type : String , require: false },
    completed : { type : Boolean , default : false }

})

// export task
module.exports = mongoose.model('Task',taskSchema)