const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) =>{
    mongoose.connect('mongodb://localhost/mati_app_fans');
    mongoose.connection
    .once('open', () => {done()})
    .on('error', (error) => {
        console.warn('Warning', error);
    });
});

//Runs before all test are done
before((done) => {
    mongoose.connection.collections.users.drop(() =>{
        done();
    })
});