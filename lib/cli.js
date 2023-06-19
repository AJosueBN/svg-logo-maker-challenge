const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Circle , Triangle , Square} = require('./shapes');
const SVG = require('./svg');

class CLI {
    
    run() {
        return inquirer.prompt([{
            type: 'input',
            name: 'logotext',
            message: 'Enter logo text - Note: Keep it to three characters',
             
        },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter text color'
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
}]).then((answers)=> {
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
    
    
    return writeFile('logo.svg' , svg.render())
}).then(() => {
    console.log('logo.svg has successfully been generated "/' )
}).catch((err) => {
    console.log(err)
})
    }
}



module.exports = CLI


