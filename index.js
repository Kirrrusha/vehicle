import Car from './components/car';
import Motorcycle from './components/motorcycle';
import Bus from './components/bus';
import getRandomInt from './components/getRandomInt';

let content = document.getElementById('content');

let count = 0;
let counter = document.createElement('div');
counter.className = "counter";
counter.innerHTML = count;
content.appendChild(counter);

let createElement = function () {
    let div = document.createElement('div');
    div.className = 'vehicle';
    content.appendChild(div);
    return div;
}

let collection = [
    [new Car('Lada'), createElement()],
    /* [new Motorcycle('Yamaha'), createElement()],
    [new Bus('90'), createElement()],
    [new Car('Nissan'), createElement()],
    [new Motorcycle('BMW'), createElement()],
    [new Bus('MAN'), createElement()],
    [new Car('BMW'), createElement()],
    [new Motorcycle('JAVA'), createElement()],
    [new Bus('Mercedes'), createElement()] */
];

// config
let initialize = function (arr) {
    let vehicle = arr[0];
    vehicle.setCurrentPosition(getRandomInt(0, screen.width)); 
    
    vehicle.setElement(arr[1]);

    vehicle.on('newTurn', function(){
        count = count + 1;
        counter.innerHTML = count;
    })
};

collection.forEach(initialize);

// run
let run = function (item) {
    let vehicle = item[0];
    vehicle.motion();
}
setInterval(function () {
    collection.forEach(run)
}, 300);