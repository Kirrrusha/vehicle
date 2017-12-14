class Vehicle {
    constructor(name) {
        this.name = name;
        this.speed = 0;
        this.currentPosition = 0;
    }
    
    getSpeed(){
        return this.speed;
    }

    getCurrentPosition(){
        return this.currentPosition;
    }

    setCurrentPosition(x){
        this.currentPosition = x;
    }

    move(){
        this.currentPosition = this.currentPosition + this.speed;
    }
}

class Car extends Vehicle{
    constructor(name){
        super(name);
        this.speed = 2;
    }
}


let car1 = new Car('Lada');
// let motorcycle1 = new Motorcycle('Yamaha');
// let   bus1 = new Bus('90'); 

let div = document.createElement('div');
div.id = 'car1';
div.style.width = 10 + 'px';
document.body.appendChild(div);

/* function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} */

while (car1.currentPosition < screen.width - 10){
    div.style.left = car1.currentPosition + 'px';
    setTimeout(function(){
        car1.move.bind(this);
    }, 1000);
    console.log(car1.currentPosition);
}
