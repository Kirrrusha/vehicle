import Car from './components/car';
import Motorcycle from './components/motorcycle';
import Bus from './components/bus';
import mediator from './components/mediator';

let content = document.getElementById('content');


let count = 0;

let counter = document.createElement('div');
counter.className = "counter";
counter.innerHTML = count;
content.appendChild(counter);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let createElement = function () {
    let div = document.createElement('div');
    div.className = 'vehicle';
    content.appendChild(div);
    return div;
}

let positionHandler = function (div) {
    return function(){
        this.move();
        console.log('move ' + this.currentPosition);
        if (this.currentPosition > screen.width - 10) {
            this.setCurrentPosition(0);
            div.style.left = '0px';
            count++;
            counter.innerHTML = count;
        }
        div.style.left = this.currentPosition + 'px';
    };
}

export default positionHandler;

let collection = [
    [new Car('Lada'), createElement()],
    [new Motorcycle('Yamaha'), createElement()],
    [new Bus('90'), createElement()],
    [new Car('Nissan'), createElement()],
    [new Motorcycle('BMW'), createElement()],
    [new Bus('MAN'), createElement()],
    [new Car('BMW'), createElement()],
    [new Motorcycle('JAVA'), createElement()],
    [new Bus('Mercedes'), createElement()]
];

z

// config
let initialize = function (arr) {
    let vehicle = arr[0];
    vehicle.setCurrentPosition(getRandomInt(0, screen.width - 10)); //останется

    mediator.installTo(vehicle);//перенос в vehicle

    vehicle.on('changePosition', positionHandler(arr[1]));// ещё и замена цвета, и добавить ещё один hendler для замене цвета //перенос в vehicle
};
collection.forEach(initialize);

// run
let run = function (item) {
    item[0].emit('changePosition')// вызов метода vehicle
}
setInterval(function () {
    collection.forEach(run)
}, 50);


/*
Перенос привязки элемента к модели (экземпляру класса) в vehicle-класс, туда же уйдёт медиатор (и on и emit), может быть любое событие,
добавить handler

Здесь останется initialize в котором будет привязка к элементу и run в котором будет осуществляться вызов метода move,
вся остальная логика в vehicle

*/