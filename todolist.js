#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
//print welcome message
console.log(chalk.bold.magentaBright(`\n \t \t <<<<<<=====>>>>>>`));
console.log(chalk.bold.magentaBright('(welcome to \' code with Mariya \' To-do-list)'));
console.log(chalk.magentaBright('\t\t <<<<<<****>>>>>>'));
//Arrow function
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: "list",
                message: "select an option you want to do",
                choices: ["Addtask", "Delete Task", "Update", "View Todo-List", "Exit"]
            },
        ]);
        //conditions
        if (option.choice === "Addtask") {
            await addTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
    }
};
main();
//    //Arrow function to add new tassk to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todo list\n`);
};
//Function to view all todo-list-task
let viewTask = async () => {
    console.log("\n Your Todo-list: \n");
    todos.forEach((task, index) => {
        console.log(`${index}: ${task})`);
    });
};
//Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to delete",
        }]);
    let deleteTask = todos.splice(taskIndex.index, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully todo-list`);
};
