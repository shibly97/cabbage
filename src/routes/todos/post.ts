import express, {Request, Response, NextFunction}  from 'express'
import Todo from '../../models/todo'
const router = express.Router()

router.post('/', async (req: Request, res: Response) => {  
    console.log("Request to add", req.body)

    try{
        const currentDate = new Date()
    
        const newTodo = new Todo({
            todo: req.body.todo,
            description: req.body.description,
            createdDate : currentDate,
            deadline: req.body.deadline,
            completed:  false
        })
    
        let saveTodo = await newTodo.save()
     
        return res.json({
            success: true
        });

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Server error');
    }


})

// export default router
module.exports = router  
