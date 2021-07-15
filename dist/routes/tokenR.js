"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenC = require('../controllers/TokenC'); var _TokenC2 = _interopRequireDefault(_TokenC);

const router = new (0, _express.Router)();

router.post('/', _TokenC2.default.store);

exports. default = router;
