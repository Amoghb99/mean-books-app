const express = require('express');
const router= express.Router();
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

router.route('/update/:id').put((req,res)=>{
    Book.findByIdAndUpdate(req.params.id,{$set: req.body},(error,data)=>{
        if(error){
            return next(error);
        } else{
            res.json(data);
            console.log("Updated");
        }
})
});

router.route('/delete/:id').delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id,(error,data)=>{
    if(error){
        return next(error);
    } else{
       res.status(200).json({
        msg:data
       })
    }
       
})
});





module.exports = router;