"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
while (condition) {
    var addTask = await inquirer_1.default.prompt([
        {
            name: 'todos',
            type: 'input',
            message: "What you want to add in your Todos?"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more ?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
    //console.log(addTask.todo)
}
