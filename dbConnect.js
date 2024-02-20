const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://admin:HvknuRtVmslClCYQ@demo.gn6hphd.mongodb.net/node_learning';
//HvknuRtVmslClCYQ

  const dbConnect = async() => {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));
  };

  module.exports = dbConnect;