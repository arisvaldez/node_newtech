const { Router } = require('express');
const router = Router();
const { jwtValidator } = require('../middleware/jwt-validator')

const {
    retrieve,
    retrieveById,
    create,
    modify,
    remove
} = require('../controllers/book.controller');

router.get('/', [jwtValidator], retrieve);

router.get('/:id', retrieveById);

router.post('/', create);

router.put('/', modify);

router.delete('/', remove);

module.exports = router;