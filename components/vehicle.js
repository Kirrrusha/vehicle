import Mediator from './mediator';
import positionHandler from './positionHandler';
import colorHandler from './colorHandler';


export default class Vehicle {
    constructor(name) {
        this.name = name;
        this.speed = 0;
        this.currentPosition = 0;
        let mediator = new Mediator();
        //console.log(this);
        //mediator.installTo(this);
        this.on('changePosition', function(){
            if (this.getCurrentPosition() >= screen.width) {
                this.emit('newTurn');
                this.setCurrentPosition(0);
            } else {
                this.move();
            }
        });
        this.on('changeColor', function(){
            let el = this.getElement();
            if (!el) return;
            return colorHandler(this, el);
        });
    }
    
    getSpeed(){
        return this.speed;
    }

    getCurrentPosition(){
        return this.currentPosition;
    }

    setCurrentPosition(x){
        this.currentPosition = x;
        let el = this.getElement();
        if (el) el.style.left = x + 'px';
    }

    move(){
        this.setCurrentPosition(this.getCurrentPosition() + this.getSpeed());
    }

    setElement(element){
        this.element = element;
        // this.on('changePosition', positionHandler(element));
        // this.on('changeColor', colorHandler(element));
    }
    getElement(){
        return this.element;
    }

    motion(){
        this.emit('changePosition');
        this.emit('changeColor');
    }
}