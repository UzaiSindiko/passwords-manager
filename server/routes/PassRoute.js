const router = require('express').Router()
const PassController = require('../controllers/PassController')
const { authorizationPass } = require('../middleware/auth')

router.get('/search', PassController.search)
router.post('/', PassController.create)
router.patch('/:id', authorizationPass, PassController.update)
router.get('/', PassController.find)
router.get('/:id', authorizationPass, PassController.findOne)
router.delete('/:id', authorizationPass, PassController.delete)

module.exports = router