const {Circle , Square, Triangle} = require('../lib/shapes')

// A testing suite for shapes (Circle , Square , Triangle) is created.
describe('Circle', () => {
    test("Should render SVG for Circle element" , () => {
        // Tests to see whether code that is expected matches with the code that is received (type of shape)
        const expectedSvg = `<circle cx="150" cy="100" r="80" stroke="red" fill="blue" />`
        const circle = new Circle();
        circle.setColor("blue")
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
        // Testing for colour match-up
    test("Should accept a fillColor param" , () => {
        const expectedSvg =`<circle cx="150" cy="100" r="80" stroke="red" fill="blue" />`
        const circle = new Circle();
        circle.setColor("blue")
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
})

describe('Square', () => {
    test("Should render SVG for Square element" , () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="blue" />`
        const square = new Square();
        square.setColor("blue")
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    })

    test("Should accept a fillColor param" , () => {
        const expectedSvg =`<rect x="90" y="40" width="120" height="120" fill="blue" />`
        const square = new Square();
        square.setColor("blue")
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
})

describe('Triangle', () => {
    test("Should render SVG for Triangle(polygon) element" , () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        const triangle = new Triangle();
        triangle.setColor("blue")
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })

    test("Should accept a fillColor param" , () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        const triangle = new Triangle();
        triangle.setColor("blue")
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
})



