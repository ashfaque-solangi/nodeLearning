const express = require('express');
const User = require('./model.js');

const api = express();


api.get('/test', async(req, resp)=>{
    const user = new User({ name: 'ashfaque', email:'ashfaque@gmail.com', password:'12345', contact:'002342389' });
    await user.save();

    resp.send(user);
});


api.get('/getUsers', async(req, resp)=>{
    const users = await User.find();
    console.log(users);
    resp.send(users);
});


api.get('/findUserOne', async(req, resp)=>{
    const query = await User.findOne({ 'name': 'ashfaque' })
                            .select('name email contact');
    console.log(query);
    resp.send(query);
});

api.get('/updateUser', async(req, resp)=>{
    
    const filter = { name: 'ashfaque' };
    const update = { name: 'Ashfaque Ahmed' };

    const query = await User.findOneAndUpdate(filter, update)
    console.log(query);
    resp.send(query);
});


api.get('/deleteUser', async(req, resp)=>{
    
    const filter = { name: 'abcd' };

    const query = await User.deleteOne(filter)
    console.log(query);
    resp.send(query);
});


module.exports = api;