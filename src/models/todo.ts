import mongoose from 'mongoose'

const todo = new mongoose.Schema({
    todo: {type:String, required:true},
    description: {type:String},
    createdDate : {type:Date, require: true},
    deadline: {type:Date},
    completed: {type:Boolean, default: false},
    completedDate : {type:Date}
})

const Todo = mongoose.model('Todo', todo)

export default Todo