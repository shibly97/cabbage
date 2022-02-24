"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/', require('./get'));
router.use('/add', require('./post'));
router.use('/delete', require('./delete'));
router.use('/update', require('./update'));
// export default router
module.exports = router;
