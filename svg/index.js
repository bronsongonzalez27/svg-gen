const inquire = require("inquirer");
const test = require("jest");
// const fs = require("fs");
// pulling information from shapes.js 
const {Shape, Rectangle, Square, Circle} = require("./LIB/shapes.js");

// function prompt to ask user for input on what they would like for their logo

const inquirer = require("inquirer");
const fs = require("fs");

// Importing shapes from shapes.js


// Function to generate the SVG content based on user input
function generateSVG(data) {
    // Extract user input from the data object
    const { textLetters, shapeColor, fontColors, shape } = data;
  
    // Customize SVG content based on user input
    let svgContent = `<svg width="100" height="100">`;
  
    switch (shape) {
      case "Circle":
        svgContent += `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`;
        break;
      case "Square":
        svgContent += `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`;
        break;
      case "Triangle":
        svgContent += `<polygon points="50,10 90,90 10,90" fill="${shapeColor}" />`;
        break;
      default:
        break;
    }
  
    svgContent += `<text x="50" y="50" text-anchor="middle" fill="${fontColors}">${textLetters}</text>`;
    svgContent += `</svg>`;
  
    return svgContent;
  }
  

// prompts to generate
const questionsPrompt = [
  {
    type: "input",
    name: "textLetters",
    message: "What characters would you want to generate in your logo?",
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
];

// Function that generates user input and generates the logo
function generateLogo() {
  inquirer.prompt(questionsPrompt).then((answers) => {
   

    // Generate SVG content based on user input
    const svgContent = generateSVG(answers);

    // Write the SVG content to a file
    const fileName = "logo"; 
    fs.writeFile(fileName + ".svg", svgContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });
}

// Call the function to start the logo generation process
generateLogo();
