const mongoose = require('mongoose');
const dbgr = require('debug')('development: mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/scratch')
.then(function(){
    dbgr("connected to database");
    console.log('Connected to database');

})
.catch(function(err) {
    dbgr("error connecting to database");
    console.log(err);
});

module.exports = mongoose.connection;