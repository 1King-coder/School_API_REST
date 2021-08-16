Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _dotenv = require('dotenv');

const _dotenv2 = _interopRequireDefault(_dotenv);
const _path = require('path');
const _cors = require('cors');

const _cors2 = _interopRequireDefault(_cors);
const _helmet = require('helmet');

const _helmet2 = _interopRequireDefault(_helmet);

_dotenv2.default.config();

require('./database');

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const _homeR = require('./routes/homeR');

const _homeR2 = _interopRequireDefault(_homeR);
const _userR = require('./routes/userR');

const _userR2 = _interopRequireDefault(_userR);
const _tokenR = require('./routes/tokenR');

const _tokenR2 = _interopRequireDefault(_tokenR);
const _studentR = require('./routes/studentR');

const _studentR2 = _interopRequireDefault(_studentR);
const _uploadR = require('./routes/uploadR');

const _uploadR2 = _interopRequireDefault(_uploadR);

const whiteList = [
  'http://54.232.12.74',
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
    this.app = _express2.default.call(void 0);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeR2.default);
    this.app.use('/tokens', _tokenR2.default);
    this.app.use('/students/', _studentR2.default);
    this.app.use('/users/', _userR2.default);
    this.app.use('/upload/', _uploadR2.default);
  }
}

exports.default = new App().app;
