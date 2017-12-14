import Vehicle from './vehicle';

export default class Motorcycle extends Vehicle{
    constructor(name){
        super(name);
        this.speed = 5;
    }
}
