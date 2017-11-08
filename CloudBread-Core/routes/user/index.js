const express = require('express');
const router = express.Router();

const controller = require('./user.ctrl');

/* user라우팅 로직*/
router.get('/', controller.index);
router.get('/:id', controller.read);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destory);


module.exports = router;
