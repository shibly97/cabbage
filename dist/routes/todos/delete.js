"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("../../models/todo"));
const router = express_1.default.Router();
router.delete('/:id', (req, res) => {
    console.log("requesting to delete", req.params);
    todo_1.default.findByIdAndRemove(req.params.id)
        .then(result => {
        console.log(result);
        return res.json({
            success: true
        });
    })
        .catch(err => {
        console.log(err);
        return ({
            success: false,
            message: 'Something went wrong'
        });
    });
});
// export default router
module.exports = router;
