const SVG = require('../lib/svg');
const { Square , Triangle , Circle } = require('./shapes');

describe('Square', () => {
    test("Should render SVG for Square element" , () => {
        const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text></svg>`
        const square = new Square();
        square.setColor("red")
        const svg = new SVG();
        svg.setText('svg', 'blue')
        svg.setShape(square)
        const actualSvg = square.render();
        expect(svg.render()).toEqual(expectedSvg);
    })

    
})