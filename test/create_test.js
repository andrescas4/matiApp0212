const assert = require('assert');
const User = require('../models/user');

const usr = new User({name:'Andres', lastName:'Castillo', password:'123', email:'andrescas4@gmail.com', user:'andrescas4'});




describe('Saving records', () => {

    beforeEach((done) =>{
       usr.save()
       .then(() => done()) 
    })

    it('Record saved', (done) => {
        assert(!usr.isNew);
        done();
    })


    it('Name added',  (done) =>{
        User.find({ name: 'Andres' })
        .then((users) => {
            assert(users[0].name === usr.name);
            done();
        })
        
    })

    it('Lastname added', (done) =>{
        User.find({lastName:'Castillo'})
        .then((users) => {
            assert(users[0].lastName === usr.lastName);
            done();
        })
    })
        

        
})

