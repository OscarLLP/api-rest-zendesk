
const Joi = require('joi');

const userSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(50).required(),    
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    phone: Joi.number().integer().required()
});

module.exports =  userSchema;
