class SVG {
    constructor() {
     this.text = ''
     this.shape = ''
    }
   render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
   }
   setText(message , color) {
    this.text = `<text x="10" y="10"fill=${color}>${message}</text>`;
   }
   setShape(element) {
    this.shape = element.render();
   }
}

module.exports = SVG
