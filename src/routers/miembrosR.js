const express = require('express');
const router = express.Router();

const miembrosCTR = require('../controller/miembros');

router.post('/user/miembros', miembrosCTR.create);
router.get('/user/miembros', miembrosCTR.getAll);
router.get('/user/miembros/:id', miembrosCTR.getById);
router.put('/user/miembros/:id', miembrosCTR.updateById);
router.delete('/user/miembros/:id', miembrosCTR.deleteById);

module.exports = router;