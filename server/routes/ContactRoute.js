const router = require('express').Router()
const ContactController = require('../controllers/ContactController')
const { authorizationContact } = require('../middleware/auth')

router.get('/search', ContactController.search)
router.post('/', ContactController.create)
router.patch('/:id', authorizationContact, ContactController.update)
router.get('/', ContactController.find)
router.get('/:id', authorizationContact, ContactController.findOne)
router.delete('/:id', authorizationContact, ContactController.delete)

module.exports = router
