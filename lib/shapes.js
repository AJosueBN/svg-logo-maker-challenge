// Main class(Shape) with constructor has inherited classes (Circle , Triangle , Square) and withim them has their own functions 
class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color){
        this.color = color;
    }
}
// Inherited classes take in properties from the Shape class and call in (this.color)
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" stroke="red" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// Exports function within this file and utilises it in other functions outside this file
module.exports = {Circle , Square , Triangle};