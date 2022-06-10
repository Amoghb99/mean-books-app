const express = require('express');
require('./src/db/mongoose');
var cors= require('cors');
const bookRouter = require('./src/routers/book');

const app = express();
app.use(cors());
app.use(express.json());

app.use(bookRouter);



app.listen(3000, ()=> {console.log("listening on 3000")}
)