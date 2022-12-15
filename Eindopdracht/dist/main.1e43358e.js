// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: 'LOAD',
    MENU: 'MENU',
    GAME: 'GAME'
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;
var _CST = require("../CST");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);
  var _super = _createSuper(LoadScene);
  function LoadScene() {
    _classCallCheck(this, LoadScene);
    return _super.call(this, {
      key: _CST.CST.SCENES.LOAD
    });
  }
  _createClass(LoadScene, [{
    key: "preload",
    value: function preload() {
      var highScore = 0;

      // Preload ingredients
      this.load.spritesheet('cheese', './assets/img/cheese.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('chocolate', './assets/img/chocolate.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('dough', './assets/img/dough.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('sugar', './assets/img/sugar.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });

      // Preload nasties
      this.load.spritesheet('bolt', './assets/img/bolt.png', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('can', './assets/img/can.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('fish', './assets/img/fish.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('gear', './assets/img/gear.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('nail', './assets/img/nail.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });

      // Preload bowls, trash cans and cloud
      this.load.spritesheet('bowlFull', './assets/img/bowlFull.png', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('bowlEmpty', './assets/img/bowlEmpty.png', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('trashCan', './assets/img/trashCan.jpg', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
      this.load.spritesheet('cloud', './assets/img/cloud.png', {
        frameWidth: '100%',
        frameHeight: '100%'
      });

      // Preload Chef
      this.load.spritesheet('chef', './assets/img/chef.png', {
        frameWidth: '100%',
        frameHeight: '100%'
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU, 'hello world');
      this.scene.launch();
    }
  }]);
  return LoadScene;
}(Phaser.Scene);
exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;
var _CST = require("../CST");
var _LoadScene = require("./LoadScene");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);
  var _super = _createSuper(MenuScene);
  function MenuScene() {
    _classCallCheck(this, MenuScene);
    return _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
  }
  _createClass(MenuScene, [{
    key: "create",
    value: function create() {
      var _this = this;
      this.add.text(100, 0, 'SCORE', {
        fill: '#ffffff',
        fontSize: 46,
        fontFamily: 'Digital Arcade'
      });
      this.add.text(500, 0, 'HIGH SCORE', {
        fill: '#ffffff',
        fontSize: 46,
        fontFamily: 'Digital Arcade'
      });
      this.scoreText = this.add.text(100, 50, this.score, {
        fill: '#3cdfff',
        fontSize: 38,
        fontFamily: 'Digital Arcade'
      });
      this.scoreText = this.add.text(500, 50, _LoadScene.LoadScene.highScore, {
        fill: '#3cdfff',
        fontSize: 38,
        fontFamily: 'Digital Arcade'
      });
      this.add.text(100, 50, '', {
        fill: '#3cdfff',
        fontSize: 38,
        fontFamily: 'Digital Arcade'
      });
      this.add.text(500, 50, '', {
        fill: '#3cdfff',
        fontSize: 38,
        fontFamily: 'Digital Arcade'
      });
      var playGameBtn = this.add.text(400, 400, 'Play Game', {
        fill: '#ffffff',
        fontSize: 46,
        fontFamily: 'Digital Arcade'
      }).setOrigin(0.5);
      playGameBtn.setInteractive();
      playGameBtn.on('pointerdown', function () {
        _this.scene.start(_CST.CST.SCENES.GAME);
      });
    }
  }]);
  return MenuScene;
}(Phaser.Scene);
exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js","./LoadScene":"src/scenes/LoadScene.js"}],"src/scenes/GameScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameScene = void 0;
var _CST = require("../CST");
var _LoadScene = require("./LoadScene");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var GameScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);
  var _super = _createSuper(GameScene);
  function GameScene() {
    _classCallCheck(this, GameScene);
    return _super.call(this, {
      key: _CST.CST.SCENES.GAME
    });
  }
  _createClass(GameScene, [{
    key: "create",
    value: function create() {
      this.score = 0;

      // Displays hight score and core
      this.add.text(100, 0, 'SCORE', {
        fill: '#ffffff',
        fontSize: 46,
        fontFamily: 'Digital Arcade'
      });
      this.add.text(500, 0, 'HIGH SCORE', {
        fill: '#ffffff',
        fontSize: 46,
        fontFamily: 'Digital Arcade'
      });
      this.scoreText = this.add.text(100, 50, this.score, {
        fill: '#3cdfff',
        fontSize: 38,
        fontFamily: 'Digital Arcade'
      });
      this.scoreText = this.add.text(500, 50, _LoadScene.LoadScene.highScore, {
        fill: '#3cdfff',
        fontSize: 38,
        fontFamily: 'Digital Arcade'
      });

      // Loads the ingredients
      this.cheese = this.physics.add.image(600, 0, 'cheese').setOrigin(0, 0).setScale(0.2).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1);
      this.chocolate = this.physics.add.image(600, 0, 'chocolate').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1);
      this.dough = this.physics.add.image(600, 0, 'dough').setOrigin(0, 0).setScale(0.2).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1);
      this.sugar = this.physics.add.image(600, 0, 'sugar').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1);

      // Loads the nasties
      this.fish = this.physics.add.image(600, 0, 'fish').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1);
      this.gear = this.physics.add.image(600, 0, 'gear').setOrigin(0, 0).setScale(0.1).setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 300)).setCollideWorldBounds(true).setBounce(1);

      // Loads the images
      this.trashCan = this.physics.add.image(0, 630, 'trashCan').setOrigin(0, 0).setScale(0.4);
      this.trashCan = this.physics.add.image(90, 630, 'trashCan').setOrigin(0, 0).setScale(0.4);
      this.trashCan = this.physics.add.image(180, 630, 'trashCan').setOrigin(0, 0).setScale(0.4);
      this.trashCan = this.physics.add.image(500, 630, 'trashCan').setOrigin(0, 0).setScale(0.4);
      this.trashCan = this.physics.add.image(600, 630, 'trashCan').setOrigin(0, 0).setScale(0.4);
      this.trashCan = this.physics.add.image(700, 630, 'trashCan').setOrigin(0, 0).setScale(0.4);
      this.bowlEmpty = this.physics.add.image(270, 630, 'bowlEmpty').setOrigin(0, 0).setScale(0.4);
      this.add.text(370, 725, '0', {
        fill: '#000000',
        fontSize: 46,
        fontFamily: 'Digital Arcade'
      });

      // Loads the chef
      this.chef = this.physics.add.sprite(400, 400, 'chef').setScale(0.1);
      this.chef.setCollideWorldBounds(true);

      // Set chef collisions
      this.physics.add.overlap(this.chef, this.cheese, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.chef, this.chocolate, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.chef, this.dough, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.chef, this.sugar, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.chef, this.fish, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.chef, this.gear, this.chefVsItemCollision, null, this);

      // Set good collisions with bowl
      this.physics.add.overlap(this.bowlEmpty, this.cheese, this.addPoints, null, this);
      this.physics.add.overlap(this.bowlEmpty, this.chocolate, this.addPoints, null, this);
      this.physics.add.overlap(this.bowlEmpty, this.dough, this.addPoints, null, this);
      this.physics.add.overlap(this.bowlEmpty, this.sugar, this.addPoints, null, this);

      // Set bad collisions with bowl
      this.physics.add.overlap(this.bowlEmpty, this.fish, this.removePoints, null, this);
      this.physics.add.overlap(this.bowlEmpty, this.gear, this.removePoints, null, this);

      // Set collisions with trash cans
      this.physics.add.overlap(this.trashCan, this.cheese, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.trashCan, this.chocolate, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.trashCan, this.dough, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.trashCan, this.sugar, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.trashCan, this.fish, this.chefVsItemCollision, null, this);
      this.physics.add.overlap(this.trashCan, this.gear, this.chefVsItemCollision, null, this);

      // Set keybindings
      this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
  }, {
    key: "update",
    value: function update() {
      this.moveChef();
      this.pushClouds();
    }
  }, {
    key: "moveChef",
    value: function moveChef() {
      if (this.wKey.isDown) {
        this.chef.y -= 6;
      }
      if (this.aKey.isDown) {
        this.chef.x -= 6;
      }
      if (this.sKey.isDown) {
        this.chef.y += 6;
      }
      if (this.dKey.isDown) {
        this.chef.x += 6;
      }
    }
  }, {
    key: "pushClouds",
    value: function pushClouds() {
      if (this.left.isDown) {
        this.cloud = this.physics.add.sprite(this.chef.x, this.chef.y, 'cloud').setScale(0.01);
        this.cloud.setGravityX(-1000);
      }
      if (this.right.isDown) {
        this.cloud = this.physics.add.sprite(this.chef.x, this.chef.y, 'cloud').setScale(0.01);
        this.cloud.setGravityX(1000);
      }
      if (this.down.isDown) {
        this.cloud = this.physics.add.sprite(this.chef.x, this.chef.y, 'cloud').setScale(0.01);
        this.cloud.setGravityY(1000);
      }
    }
  }, {
    key: "cloudCollision",
    value: function cloudCollision() {
      this.cloud.destroy();
    }
  }, {
    key: "chefVsItemCollision",
    value: function chefVsItemCollision() {
      if (this.score > _LoadScene.LoadScene.highScore) {
        _LoadScene.LoadScene.highScore = this.score;
      }
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }, {
    key: "addPoints",
    value: function addPoints(bowl, item) {
      item.y = 0;
      this.score += 10;
      this.scoreText.setText(this.score);
      console.log(this.score);
    }
  }, {
    key: "removePoints",
    value: function removePoints(bowl, item) {
      item.y = 0;
      this.score -= 20;
      this.scoreText.setText(this.score);
      console.log(this.score);
    }
  }, {
    key: "moveItemUp",
    value: function moveItemUp(trash, item) {
      item.y = 0;
    }
  }]);
  return GameScene;
}(Phaser.Scene);
exports.GameScene = GameScene;
},{"../CST":"src/CST.js","./LoadScene":"src/scenes/LoadScene.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("../src/scenes/LoadScene");
var _MenuScene = require("../src/scenes/MenuScene");
var _GameScene = require("./scenes/GameScene");
/** @type {import('../typings/phaser')} */

var game = new Phaser.Game({
  width: 800,
  height: 800,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _GameScene.GameScene],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }
});
var gameScore = 0;
var highScore = 0;
},{"../src/scenes/LoadScene":"src/scenes/LoadScene.js","../src/scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/GameScene":"src/scenes/GameScene.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52791" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map