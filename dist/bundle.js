/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediator = __webpack_require__(4);

var _mediator2 = _interopRequireDefault(_mediator);

var _positionHandler = __webpack_require__(5);

var _positionHandler2 = _interopRequireDefault(_positionHandler);

var _colorHandler = __webpack_require__(6);

var _colorHandler2 = _interopRequireDefault(_colorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
    function Vehicle(name) {
        _classCallCheck(this, Vehicle);

        this.name = name;
        this.speed = 0;
        this.currentPosition = 0;
        var mediator = new _mediator2.default();
        //console.log(this);
        //mediator.installTo(this);
        this.on('changePosition', function () {
            if (this.getCurrentPosition() >= screen.width) {
                this.emit('newTurn');
                this.setCurrentPosition(0);
            } else {
                this.move();
            }
        });
        this.on('changeColor', function () {
            var el = this.getElement();
            if (!el) return;
            return (0, _colorHandler2.default)(this, el);
        });
    }

    _createClass(Vehicle, [{
        key: 'getSpeed',
        value: function getSpeed() {
            return this.speed;
        }
    }, {
        key: 'getCurrentPosition',
        value: function getCurrentPosition() {
            return this.currentPosition;
        }
    }, {
        key: 'setCurrentPosition',
        value: function setCurrentPosition(x) {
            this.currentPosition = x;
            var el = this.getElement();
            if (el) el.style.left = x + 'px';
        }
    }, {
        key: 'move',
        value: function move() {
            this.setCurrentPosition(this.getCurrentPosition() + this.getSpeed());
        }
    }, {
        key: 'setElement',
        value: function setElement(element) {
            this.element = element;
            // this.on('changePosition', positionHandler(element));
            // this.on('changeColor', colorHandler(element));
        }
    }, {
        key: 'getElement',
        value: function getElement() {
            return this.element;
        }
    }, {
        key: 'motion',
        value: function motion() {
            this.emit('changePosition');
            this.emit('changeColor');
        }
    }]);

    return Vehicle;
}();

exports.default = Vehicle;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

exports.default = getRandomInt;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _car = __webpack_require__(3);

var _car2 = _interopRequireDefault(_car);

var _motorcycle = __webpack_require__(7);

var _motorcycle2 = _interopRequireDefault(_motorcycle);

var _bus = __webpack_require__(8);

var _bus2 = _interopRequireDefault(_bus);

var _getRandomInt = __webpack_require__(1);

var _getRandomInt2 = _interopRequireDefault(_getRandomInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = document.getElementById('content');

var count = 0;
var counter = document.createElement('div');
counter.className = "counter";
counter.innerHTML = count;
content.appendChild(counter);

var createElement = function createElement() {
    var div = document.createElement('div');
    div.className = 'vehicle';
    content.appendChild(div);
    return div;
};

var collection = [[new _car2.default('Lada'), createElement()]];

// config
var initialize = function initialize(arr) {
    var vehicle = arr[0];
    vehicle.setCurrentPosition((0, _getRandomInt2.default)(0, screen.width));

    vehicle.setElement(arr[1]);

    vehicle.on('newTurn', function () {
        count = count + 1;
        counter.innerHTML = count;
    });
};

collection.forEach(initialize);

// run
var run = function run(item) {
    var vehicle = item[0];
    vehicle.motion();
};
setInterval(function () {
    collection.forEach(run);
}, 300);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vehicle = __webpack_require__(0);

var _vehicle2 = _interopRequireDefault(_vehicle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = function (_Vehicle) {
    _inherits(Car, _Vehicle);

    function Car(name) {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, name));

        _this.speed = 2;
        return _this;
    }

    return Car;
}(_vehicle2.default);

exports.default = Car;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mediator = function () {
    function Mediator() {
        _classCallCheck(this, Mediator);
    }

    _createClass(Mediator, [{
        key: "emit",
        value: function emit(channel, fn) {
            if (!this.mediator.channels[channel]) this.mediator.channels[channel] = [];
            this.mediator.channels[channel].push({
                context: this,
                callback: fn
            });
            return this;
        }
    }, {
        key: "on",
        value: function on(channel) {
            if (!this.mediator.channels[channel]) return false;
            var subscription = null;
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, l = this.mediator.channels[channel].length; i < l; i++) {
                subscription = this.mediator.channels[channel][i];
                subscription.callback.apply(subscription.context, args);
            }
            return this;
        }
    }, {
        key: "installTo",
        value: function installTo(obj) {
            obj.on = emit(channel, fn);
            obj.emit = on(channel);
        }
    }]);

    return Mediator;
}();

/* let subscribe = function (channel, fn) {
        if (!mediator.channels[channel]) mediator.channels[channel] = [];
        mediator.channels[channel].push({
            context: this,
            callback: fn
        });
        return this;
    },

    publish = function (channel) {
        if (!mediator.channels[channel]) return false;
        let subscription = null;
        let args = Array.prototype.slice.call(arguments, 1);
        for (let i = 0, l = mediator.channels[channel].length; i < l; i++) {
            subscription = mediator.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };

let mediator = {
    channels: {},
    emit: publish,
    on: subscribe,
    installTo: function (obj) {
        obj.on = subscribe;
        obj.emit = publish;
    }
};

export default mediator; */


exports.default = Mediator;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var positionHandler = function positionHandler(_this, div) {
    _this.move();
    if (_this.getCurrentPosition() > screen.width - 10) {
        _this.setCurrentPosition(0);
        div.style.left = '0px';
    }
    div.style.left = _this.currentPosition + 'px';
};

exports.default = positionHandler;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getRandomInt = __webpack_require__(1);

var _getRandomInt2 = _interopRequireDefault(_getRandomInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorHandler = function colorHandler(_this, div) {
    var colorBlock = ['black', 'yellow', 'green', 'red'];
    div.style.background = colorBlock[(0, _getRandomInt2.default)(0, colorBlock.length - 1)];
};

exports.default = colorHandler;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vehicle = __webpack_require__(0);

var _vehicle2 = _interopRequireDefault(_vehicle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Motorcycle = function (_Vehicle) {
    _inherits(Motorcycle, _Vehicle);

    function Motorcycle(name) {
        _classCallCheck(this, Motorcycle);

        var _this = _possibleConstructorReturn(this, (Motorcycle.__proto__ || Object.getPrototypeOf(Motorcycle)).call(this, name));

        _this.speed = 5;
        return _this;
    }

    return Motorcycle;
}(_vehicle2.default);

exports.default = Motorcycle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vehicle = __webpack_require__(0);

var _vehicle2 = _interopRequireDefault(_vehicle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bus = function (_Vehicle) {
    _inherits(Bus, _Vehicle);

    function Bus(name) {
        _classCallCheck(this, Bus);

        var _this = _possibleConstructorReturn(this, (Bus.__proto__ || Object.getPrototypeOf(Bus)).call(this, name));

        _this.speed = 1;
        return _this;
    }

    return Bus;
}(_vehicle2.default);

exports.default = Bus;

/***/ })
/******/ ]);