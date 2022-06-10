const express = require('express');
const router= new express.Router();
const Book= require('../models/book');

router.get('/books', async(req,res)=>{
    try{
        const books = await Book.find({});
        res.status(200).send(books);
    }
    catch(error){
        res.status(500).send(error);
    }
})

router.post('/books',async (req,res) => {
    const book = new Book(req.body);
    console.log("req" + JSON.stringify (req.body));
    try{
        await book.save();
        res.status(201).send(book);
    }
    catch(error){
        res.status(500).send(error);
    }
})
module.exports = router;