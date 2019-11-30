const router = require('express').Router()
const { authentication } = require('../middleware/auth')

const userRoute = require('./userRoute')
const passRoute = require('./PassRoute')
const ContactRoute = require('./ContactRoute')
const NoteRoute = require('./NoteRoute')

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'App password-manager is Running'
    })
})

router.use('/users', userRoute)
router.use('/pass', authentication, passRoute)
router.use('/contacts', authentication, ContactRoute)
router.use('/notes', authentication, NoteRoute)

module.exports = router
