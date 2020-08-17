const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user-infor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then((db)=>console.log("Mongodb is connected to", db.connection.host))
.catch((err) => console.error(err));