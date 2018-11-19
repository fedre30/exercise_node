const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema;

const MySchema = new Schema({
  fullname: { type: String, index: true },
  email: { type: String, index: true },
  github: { type: String, index: true }
});

const Validation = [
  Joi.object().keys({
    fullname: Joi.string().required().label('Fullname'),
    email: Joi.string().email().label('Email'),
    github: Joi.string().required().label('Github')
  }),
];


const Model = mongoose.model('User', MySchema);

module.exports = {
  Model,
  Validation,
  Name: 'User',
};
