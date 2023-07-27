const require = require("inquirer");
const test = require("jest");
const fs = require("fs");
const {Shape, Rectangle, Square, Circle} = require("./shapes.js");
const { type } = require("os");
// function prompt to ask user for input on what they would like for their logo

   const questionsPrompt = [
        {
            type: "input",
            name: "textLetters",
            message: "What characters would you to want generate in your logo?",
},
{
    type: "input",
    name: "fontColors",
    message: "What color would you like your logo to be?",
},
{
    type: "input",
    name: "shapeColor",
    message: "What color would you like your shape to be?",
},
{
type: "list",
name: "shape",
message: "What shape would you like to use?",
choices: ["Circle", "Square", "Triangle"],
},
    ]