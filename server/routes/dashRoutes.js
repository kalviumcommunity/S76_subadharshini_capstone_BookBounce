const router = require('express').Router();
const Book = require('../models/bookSchema');

router.get('/books',async(req,res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log(error);
    }
})

router.get('/books', async (req, res) => {
    const { email } = req.query;

    try {
        const books = await Book.find({ createdByEmail: email });
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;