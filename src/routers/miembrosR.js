const express = require('express');
const router = express.Router();
const { validate, Joi } = require('express-validation')

const miembrosCTR = require('../controller/miembros');

// const loginValidation = {
//     body: Joi.object({
//       name: Joi.string()
//         .required(),
//       last_name: Joi.string()
//         .required(),
//       age: Joi.number(),
//     }),
//   }

router.post('/user/miembros', miembrosCTR.create);
router.get('/user/miembros', miembrosCTR.getAll);
router.get('/user/miembros/:id', miembrosCTR.getById);
router.put('/user/miembros/:id', miembrosCTR.updateById);
router.delete('/user/miembros/:id', miembrosCTR.deleteById);

module.exports = router;