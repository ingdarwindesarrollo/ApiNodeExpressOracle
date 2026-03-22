const { body } = require('express-validator');

exports.createUserValidator = [
    body('name')
        .notEmpty().withMessage('Nombre requerido')
        .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),

    body('email')
        .isEmail().withMessage('Email inválido')
];