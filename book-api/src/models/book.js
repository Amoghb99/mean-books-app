const mongoose = require ('mongoose');

const booksSchema= new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
});
const Books = mongoose.model('Books', booksSchema);

module.exports= Books;