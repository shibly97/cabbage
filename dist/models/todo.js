"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todo = new mongoose_1.default.Schema({
    todo: { type: String, required: true },
    description: { type: String },
    createdDate: { type: Date, require: true },
    deadline: { type: Date },
    completed: { type: Boolean, default: false },
    completedDate: { type: Date }
});
const Todo = mongoose_1.default.model('Todo', todo);
exports.default = Todo;
