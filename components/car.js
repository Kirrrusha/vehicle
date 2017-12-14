import Vehicle from './vehicle';

export default class Car extends Vehicle{
    constructor(name){
        super(name);
        this.speed = 2;
    }
}
