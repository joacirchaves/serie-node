const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost/noderest',{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    });
} catch(err) {
    throw err;
}

mongoose.Promise = global.Promise;

module.exports = mongoose;