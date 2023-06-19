const SVG = require('../lib/svg');
const { Circle , Square , Triangle } = require('./shapes');

describe('Circle', () => {
    test("Should render SVG for a Circle element" , () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" stroke="red" fill="Blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
        const circle = new Circle();
        circle.setColor("Blue")
        const svg = new SVG();
        svg.setText('SVG', 'white')
        svg.setShape(circle)
        expect(svg.render()).toEqual(expectedSvg);
    })
})

describe('Square', () => {
    test("Should render SVG for a Square element" , () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text></svg>`
        const square = new Square();
        square.setColor("red")
        const svg = new SVG();
        svg.setText('svg', 'blue')
        svg.setShape(square)
        expect(svg.render()).toEqual(expectedSvg);
    })

    
})

describe('Triangle', () => {
    test("Should render SVG for a Triangle element" , () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`
        const triangle = new Triangle();
        triangle.setColor("purple")
        const svg = new SVG();
        svg.setText('SVG', 'blue')
        svg.setShape(triangle)
        expect(svg.render()).toEqual(expectedSvg);
    })
})

