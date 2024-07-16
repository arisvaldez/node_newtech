const { Router } = require('express');
const router = Router();
const { login } = require('../controllers/auth')
const {
    retrieve,
    retrieveById,
    create,
    modify,
    remove
} = require('../controllers/user.controller');

router.get('/', retrieve);

router.get('/:id', retrieveById);

router.post('/', create);

router.put('/', modify);

router.delete('/', remove);

router.post('/login', login)

module.exports = router;