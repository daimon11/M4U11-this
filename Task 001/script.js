const rectangle = {
  h: 5,
  w: 5,
  get perimeter() {
    return ((this.h + this.w)*2) + ' см';
  },
  get square() {
    return (this.h * this.w) + ' см';
  },
  set width(value) {
    this.h = +value;
  },
  set height(value) {
    this.w = +value;
  }
};
// rectangle.width = 55;
// rectangle.height = 10;
console.log(rectangle.perimeter);
console.log(rectangle.square);
