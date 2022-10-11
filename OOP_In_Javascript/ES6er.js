class Circle{
    #x_value;
    #y_value;
    constructor(radius, x_value = 1, y_value = 1) {
        this.radius = radius;
        this.#x_value = x_value;
        this.#y_value = y_value;

    }
    #shower(){
        return (this.#x_value * this.#y_value)
    }
    draw(){
        console.log(this.#shower() * this.radius);

    }
    static work(){
        console.log(`OOOweee!`);
    } 

}
let cir = new Circle(34,4,3);
cir.draw();
Circle.work();


module.exports = Circle;