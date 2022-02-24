import express, {Request, Response, NextFunction}  from 'express'
import Todo from '../../models/todo'

const router = express.Router()

router.delete('/:id', (req: Request, res: Response) => {  

    console.log("requesting to delete", req.params)

    Todo.findByIdAndRemove(req.params.id)
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