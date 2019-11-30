const router = require('express').Router()
const NoteController = require('../controllers/NoteController')
const { authorizationNote } = require('../middleware/auth')

router.post('/', NoteController.create)
router.patch('/:id', authorizationNote, NoteController.update)
router.get('/', NoteController.find)
router.get('/:id', authorizationNote, NoteController.findOne)
router.delete('/:id', authorizationNote, NoteController.delete)

module.exports = router
