const { Router } = require('express');
const router = Router();

const {
    home,
    findBook,
    addBook,
    findBookById,
    editBook,
    saveEditedBook
} = require('../controllers/site.controller');

router.get('/', home);

router.get('/book/find-book', findBook);
router.get('/book/find-book/:id', findBookById);

router.get('/book/add-book', addBook);
router.post('/book/add-book', addBook);

router.get('/book/edit/:id', editBook);
router.post('/book/edit/:id', saveEditedBook);



module.exports = router;