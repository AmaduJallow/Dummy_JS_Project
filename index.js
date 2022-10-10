// !Object Literal Syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 3
    },
    draw: function () {
        console.log(this.radius *3)
        
    }
}
circle.draw()

// !Factorie function
function createCircle(radius, x_value = 1, y_value = 1) {
    return {
        radius: radius,
        x_value: x_value,
        y_value: y_value,
        draw: function () {
            console.log(this.radius * x_value + this.radius * y_value);
        }
    }
    
}

let cir = createCircle(2, 5, 7);
cir.draw();

// !Constructor Function for creating an object
function Circle(radius, x_value = 1, y_value = 1) {
    this.radius = radius;
    this.x_value = x_value;
    this.y_value = y_value;
    this.draw = function () {
        console.log("drawn");
    }
}

cir = new Circle(4);
cir.draw();
