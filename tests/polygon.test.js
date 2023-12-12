/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// const { Polygon } = require('../src/polygon');
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  count() {
    return this.sides.length;
  }

  perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }

  sayName() {
    return 'Polygon';
  }
}

test('polygon', () => {
  const threeSidedPolygon = new Polygon([3, 4, 5]);
  expect(typeof threeSidedPolygon).toBe('object');
  expect(threeSidedPolygon.sides).toEqual([3, 4, 5]);
  expect(threeSidedPolygon.count()).toEqual(3);
  expect(threeSidedPolygon.perimeter()).toBe(12);
  expect(threeSidedPolygon.sayName()).toBe('Polygon');
  //
  const fiveSidedPolygon = new Polygon([3, 4, 5, 6, 7]);
  expect(typeof fiveSidedPolygon).toBe('object');
  expect(typeof fiveSidedPolygon.perimeter()).toBe('number');
  expect(fiveSidedPolygon.sides).toEqual([3, 4, 5, 6, 7]);
  expect(fiveSidedPolygon.count()).toEqual(5);
  expect(fiveSidedPolygon.perimeter()).toBe(25);
});
