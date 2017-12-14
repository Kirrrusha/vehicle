import Vehicle from './vehicle';

export default class Bus extends Vehicle{
    constructor(name){
        super(name);
        this.speed = 1;
    }
}