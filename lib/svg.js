class SVG {
    constructor() {
     this.text = ''
     this.shape = ''
    }
   render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
   }
   setText(message , color) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
   }
   setShape(element) {
    this.shape = element.render();
   }
}

module.exports = SVG
