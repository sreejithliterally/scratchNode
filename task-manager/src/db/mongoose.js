const mongoose = require('mongoose');
const { required } = require('yargs');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});



