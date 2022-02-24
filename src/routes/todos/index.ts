import express, {Request, Response, NextFunction}  from 'express'

const router = express.Router()

router.use('/', require('./get'))
router.use('/add', require('./post'))
router.use('/delete', require('./delete'))
router.use('/update', require('./update'))

// export default router
module.exports = router  