const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1/exercice_node';
mongoose.connect(db);
mongoose.Promise = global.Promise;

const default_db = mongoose.connection;
default_db.on('error', console.error.bind(console, 'MongoDB connection error:'));