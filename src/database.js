const mongoose = require('mongoose');

// connection to db
mongoose.connect('mongodb://localhost/crud-login', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));
