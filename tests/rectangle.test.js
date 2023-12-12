/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// const { Rectangle } = require('../src/rectangle');
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }

  isValid() {
    return this.length > 0 && this.width > 0;
  }

  area() {
    return this.length * this.width;
  }

  sayName() {
    return 'Rectangle';
  }

  count() {
    return 4;
  }
}

test('Rectangle', () => {
  const rectangle = new Rectangle(3, 4);
  expect(typeof rectangle).toBe('object');
  expect(rectangle.perimeter()).toBe(14);
  expect(rectangle.isValid()).toBe(true);
  expect(rectangle.area()).toBe(12);
  expect(rectangle.sayName()).toBe('Rectangle');
  expect(rectangle.count()).toBe(4);
  //
  const r0 = new Rectangle(-1, 4);
  expect(r0.isValid()).toBe(false);
});
