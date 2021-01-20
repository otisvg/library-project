import Book from '../models/book.js';

export const getBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();
        res.status(200).json(allBooks);

   } catch (err) {
     res.status(404).json({ message: err.message });
   }
}