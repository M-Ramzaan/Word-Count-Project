#!/usr/bin/env node
//Import modules
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
//Add welcome note via Arrow Function
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Let's start the word count!");
    await sleep();
    rainbowTitle.stop();
    console.log(`ℳ𝒶𝒹ℯ 𝒷𝓎 ℳ𝓊𝒽𝒶𝓂𝓂𝒶𝒹 ℛ𝒶𝓂𝓏𝒶𝓃 𝒜𝓀𝓇𝒶𝓂`);
}
await welcome();
//Take user input from below code.
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words in the sentence",
    },
]);
//Apply methods to count words
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
