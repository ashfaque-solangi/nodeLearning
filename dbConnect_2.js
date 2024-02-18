const express = require('express');
const mongoDB = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/nodeLearning';


// mongoDB
//   .connect(mongoURL, {family: 4,})
//   .then(() => console.log(`Database connected successfully`))
//   .catch((err) => console.log("err",err));


  const dbConnect = async() => {
    await mongoDB.connect(mongoURL, {
      family: 4,
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));
  };

  module.exports = dbConnect;