"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _homeR = require('./routes/homeR'); var _homeR2 = _interopRequireDefault(_homeR);
var _userR = require('./routes/userR'); var _userR2 = _interopRequireDefault(_userR);
var _tokenR = require('./routes/tokenR'); var _tokenR2 = _interopRequireDefault(_tokenR);
var _studentR = require('./routes/studentR'); var _studentR2 = _interopRequireDefault(_studentR);
var _uploadR = require('./routes/uploadR'); var _uploadR2 = _interopRequireDefault(_uploadR);

const whiteList = [
  'https://pt.wikipedia.org',
  'http://54.232.45.47',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if ((whiteList).indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _homeR2.default);
    this.app.use('/tokens', _tokenR2.default);
    this.app.use('/students/', _studentR2.default);
    this.app.use('/users/', _userR2.default);
    this.app.use('/upload/', _uploadR2.default);
  }
}

exports. default = new App().app;
