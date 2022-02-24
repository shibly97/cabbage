import express, {Request, Response, NextFunction}  from 'express'
import Todo from '../../models/todo'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {  

    console.log("got the message")
    Todo.find({})
    .then(result => {
        console.log(result)
        return res.json({
            success: true,
            todoList: result
        })
    })
    .catch(err => {
        console.log(err)
        return({
            success: false,
            message: 'Something went wrong'
        })
    })

})

// export default router
module.exports = router  
