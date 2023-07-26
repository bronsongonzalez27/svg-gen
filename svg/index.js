const require=require("inquirer");
const test = require("jest");
const fs = require("fs");
const {Shape, Rectangle, Square, Circle} = require("./shape.js");
const init = function () {
    inquire.prompt([
        {
            type: "input",
            name: "letters",
            message: "What characters would you to want generate in your logo?"
}