// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }


    get diameter(){
        return this.radius * 2;
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
        }

    get circumference(){
        return 2 * pi * this.radius;
    }

    set circumference(newCircumference){
        this.radius = newCircumference / 2 / pi
    }

    get area() {
        return pi * this.radius * this.radius;
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea/pi)
    }

}