import express, {Request, Response, NextFunction}  from 'express'
import Todo from '../../models/todo'

const router = express.Router()

router.put('/', (req: Request, res: Response) => {  

    console.log("requesting to update", req.body)
    const currentDate = new Date()

    Todo.findByIdAndUpdate(req.body.id, {completed: true, completedDate: currentDate})
    .then(result => {
        console.log(result)
        return res.json({
            success: true
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