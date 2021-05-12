const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.1xkrm.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;