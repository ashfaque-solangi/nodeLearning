const express = require('express');
const User = require('./model.js');

const api = express();


api.get('/test', async(req, resp)=>{
    const user = new User({ name: 'abc', email:'abc@gmail.com', password:'12345', contact:'002342389' });
    await user.save();

    resp.send(user);
});


api.get('/getUsers', async(req, resp)=>{
    const users = await User.find();
    console.log(users);
    resp.send(users);
});


api.get('*', (req, resp) => {
    resp.send("inVlaid Path");
});


module.exports = api;