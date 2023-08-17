// using this code to test a triangle
describe("Triangle test", () => {
    test("test for a triangle with a #ca00ca background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="50,10 90,90 10,90" fill="blue" />'
      );
    });
  });