import Book from '../models/book.js';

export const getBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();
        res.status(200).json(allBooks);

   } catch (err) {
     res.status(404).json({ message: err.message });
   }
}

export const createBook = async (req, res) => {
  const post = req.body;
  const newBook = new Book(post);

  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}