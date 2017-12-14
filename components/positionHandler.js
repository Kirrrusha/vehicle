let positionHandler = function (_this, div) {
    _this.move();
    if (_this.getCurrentPosition() > screen.width - 10) {
        _this.setCurrentPosition(0);
        div.style.left = '0px';
    }
    div.style.left = _this.currentPosition + 'px';
}

export default positionHandler;