import getRandomInt from './getRandomInt';

let colorHandler = function (_this, div) {
    let colorBlock =['black', 'yellow', 'green', 'red'];
    div.style.background = colorBlock[getRandomInt(0, colorBlock.length - 1)];
}

export default colorHandler;