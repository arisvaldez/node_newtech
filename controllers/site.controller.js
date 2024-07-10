const Book = require("../models/book");

const home = (req, res) => {
    res.render('index')
}

const addBook = async (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.render('book/add-book');
    }

    const libro = await Book.create({
        title: name,
        description
    });

    res.render('book/add-book', { name, description });
}

const findBook = async (req, res) => {
    const books = await Book.findAll();

    const list = books.map((book, index) => ({
        id: book.id,
        index: index + 1,
        title: book.title,
        description: book.description,
        year: book.year
    }));

    res.render('book/find-book', { books: list });
}

const findBookById = (req, res) => {

    res.render('book/find-book-by-id');
}

const editBook = async (req, res) => {
    const { id } = req.params;

    const _id = parseInt(id);
    const book = await Book.findByPk(_id);

    const { title, year, description } = book;

    res.render('book/edit-book', { id, title, description, year });
}


const saveEditedBook = async (req, res) => {
    const { id } = req.params;
    const { title, year, description } = req.body;

    const updatedBook = await Book.update(
        { title, description, year },
        {
            where: {
                id,
            },
        },
    );

    res.render('book/find-book');
}


module.exports = {
    home,
    findBook,
    addBook,
    findBookById,
    editBook,
    saveEditedBook
}