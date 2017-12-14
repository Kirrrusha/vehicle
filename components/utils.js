import getRandomInt from './getRandomInt';

let colorHandler = function (_this, div) {
    let colorBlock =['black', 'yellow', 'green', 'red'];
    div.style.background = colorBlock[getRandomInt(0, colorBlock.length - 1)];
}



let positionHandler = function (_this, div) {
    _this.move();
    if (_this.currentPosition > screen.width - 10) {
        _this.setCurrentPosition(0);
        div.style.left = '0px';
        count++;
        counter.innerHTML = count;
    }
    div.style.left = _this.currentPosition + 'px';
}

export { colorHandler, positionHandler };