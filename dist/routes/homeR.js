"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeC = require('../controllers/HomeC'); var _HomeC2 = _interopRequireDefault(_HomeC);

const router = new (0, _express.Router)();

router.get('/', _HomeC2.default.index);

exports. default = router;
