const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema;

const MySchema = mongoose.Schema = new Schema({
  name: { type: String, index: true },
  email: { type: String, index: true },
  link: { type: String, index: true }
});

const Validation: Array<any> = [
  Joi.object().keys({
    name: Joi.string().required().label('Name'),
    email: Joi.string().email().label('Email'),
    link: Joi.string().required().label('Link')
  }),
];

const Formatting: Array<any> = [];

const Completion: Array<any> = [];

const Model: mongoose.Model = mongoose.model('User', MySchema);

module.exports = {
  Model,
  Validation,
  Formatting,
  Completion,
  Name: 'User',
};
