const rectangle = {
  h: 5,
  w: 5,
  get perimeter() {
    return ((this.h + this.w) * 2) + ' см';
  },
  get square() {
    return (this.h * this.w) + ' см';
  },
  set width(value) {
    if (isNaN(value)) {
      alert('Вы ввели неккореткное значение! Длина должны быть числом!');
    } else {
      this.h = +value;
    }
  },
  set height(value) {
    if (isNaN(value)) {
      alert('Вы ввели неккореткное значение! Ширина должны быть числом!');
    } else {
      this.w = +value;
    }
  }
};
rectangle.width = '55';
rectangle.height = '10';
console.log(rectangle.perimeter);
console.log(rectangle.square);
