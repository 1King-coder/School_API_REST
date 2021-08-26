"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserC = require('../controllers/UserC'); var _UserC2 = _interopRequireDefault(_UserC);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// mustn't exist
// router.get('/', loginRequired, userController.index); // List all users
// router.get('/:id', loginRequired, userController.show); // List a user

router.post('/', _UserC2.default.store);
router.put('/', _loginRequired2.default, _UserC2.default.update);
router.delete('/', _loginRequired2.default, _UserC2.default.delete);

exports. default = router;

/*
index -> List the whole users -> GET
store/create -> create a new user -> POST
delete -> delete a user -> DELETE
show -> shows a user -> GET
update -> update a user -> PATCH or PUT
*/
