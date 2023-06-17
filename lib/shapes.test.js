const {Circle , Triangle, Square} = require('../lib/shapes')

describe('Triangle', () => {
    test("Should render SVG for Triangle(polygon) element" , () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182"
        fill="blue" />`
        const triangle = new Triangle();
        triangle.setColor("blue")
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })

    test("Should accept a fillColor param" , () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182"
        fill="blue" />`
        const triangle = new Triangle();
        triangle.setColor("blue")
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    })
}

)