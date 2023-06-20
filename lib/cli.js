// Contains packages for application
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Circle , Square, Triangle} = require('./shapes');
const SVG = require('./svg');

// Array of queries for user input within class CLI
class CLI {
    
    run() {
        return inquirer.prompt([{
            type: 'input',
            name: 'logotext',
            message: 'Enter logo text - Note: Maximum - Three characters',
            validate: function(inputChar) {
               if (inputChar.length > 3 || inputChar.length == 0) {
                    return 'ENTER ONLY up to three characters to text on the terminal! TYPE in a character!'
               } else {
                return true
               } 
               
            }
             
        },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter text color',
        validate: function(inputColor) {
            if (inputColor.length == 0) {
                return 'NOT accepted. ENTER a text colour to generate onto SVG logo!'
            } else {
                return true
            }
        }
    },
{
    type: 'list',
    name: 'shapetype',
    message: 'Choose shape for logo',
    choices: ['Circle' , 'Triangle' , 'Square'],


},{
  type: 'input',
  name: 'shapecolor',
  message: 'choose shape color',
  validate: function(inputShapeColor) {
    if (inputShapeColor.length == 0) {
        return 'NOT accepted. ENTER a shape color to generate onto SVG logo! '
    } else {
        return true
    }
  },
}]).then((answers)=> {
    // Switch statement to pick out particular shape depending on which shape was chosen
    let shape;
    switch(answers.shapetype){
        case 'Circle':
            shape = new Circle()
            break;

            case 'Triangle':
            shape = new Triangle()
            break;

            case 'Square':
            shape = new Square()
            break;
            default:
                shape = new Circle()
                break;

    }
    shape.setColor(answers.shapecolor) 
    const svg = new SVG()
    svg.setText(answers.logotext , answers.textcolor)
    svg.setShape(shape)
    
   // Function to write what the user has entered and generate a logo.svg file
    return writeFile('logo.svg' , svg.render())
}).then(() => {
    console.log('logo.svg has successfully been generated "/' )
}).catch((err) => {
    console.log(err)
})
    }
}


// Exports function within this file and utilises it in other functions outside this file
module.exports = CLI


