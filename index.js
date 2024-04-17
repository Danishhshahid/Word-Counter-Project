#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence to count the words",
    },
]);
let createArr = answers.sentence.trim().split(" ");
console.log(createArr);
let wordCount = createArr.length;
let Message = "Your Word Count is :";
console.log(`${Message} ${wordCount}`);
