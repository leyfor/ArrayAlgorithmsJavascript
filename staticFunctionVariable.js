
function Circle(radius) {
    this.radius = radius; // Instance field

    Circle.PI = 3.141; // Static field

}

Circle.prototype.calculateArea = function() { // Prototype fields
   return Circle.PI * this.radius * this.radius;
}

var circle = new Circle(10);
document.write("Area = " + circle.calculateArea())


function Shape(shapeName) {
    this.shapeName = shapeName;
    Shape.count = ++Shape.count || 1; // Static 
}

Shape.showCount = function () {
    return Shape.count;
}

var shape1 = new Shape("Circle");
var shape2 = new Shape("Rectangle");
var shape3 = new Shape("Triangle");

document.write("\nShape Count = " + Shape.showCount());