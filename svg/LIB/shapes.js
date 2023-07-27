class Shape {
    constructor(textLetters, shapeColor, fontColor, shape) {
      this.textLetters = textLetters;
      this.shapeColor = shapeColor;
      this.fontColor = fontColor;
      this.shape = shape;
    }
  }

class Triangle extends Shape {
  render() {
    return `<polygon points="50,10 90,90 10,90" fill="${this.shapeColor}" />`;
}
  }  
  class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />`;
        }
    }
    class Circle extends Shape {
        render() {
            return `<circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />`;
            }
        }
        
module.exports = { Shape, Triangle, Square, Circle };
