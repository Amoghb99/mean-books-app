const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book-api',
{ useUnifiedTopology:true, useNewUrlParser:true,
}).then (()=>{
    console.log('connected to localhost 3000');
}).catch((error)=>{
    console.log(error);
})
