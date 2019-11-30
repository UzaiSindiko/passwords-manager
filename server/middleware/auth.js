const { verify } = require('../helpers/jwt')
const Pass = require('../models/Password')
const Contact = require('../models/Contact')
const Note = require('../models/Note')

module.exports = {

    authentication(req, res, next) {
        try {
            req.decode = verify(req.headers.token)
            next()
        } catch (err) {
            next({
                status: 400,
                msg: 'please login first'
            })
        }
    },

    authorizationPass(req, res, next){
        const userId = req.decode.id
        const { id } = req.params

        Pass.findById(id)
            .then(pass =>{
                if(pass){
                    if(pass.userId + '' != userId){
                        next({
                            status: 403,
                            msg: 'Unathorized'
                        })
                    } else{
                        next()
                    }
                }
                else {
                    next({
                        status: 404,
                        msg: 'Data not found'
                    })
                }
            })
            .catch(next)
    },

    authorizationContact(req, res, next){
        const userId = req.decode.id
        const { id } = req.params

        Contact.findById(id)
            .then(contact =>{
                if(contact){
                    if(contact.userId + '' != userId){
                        next({
                            status: 403,
                            msg: 'Unathorized'
                        })
                    } else{
                        next()
                    }
                }
                else {
                    next({
                        status: 404,
                        msg: 'Data not found'
                    })
                }
            })
            .catch(next)
    },

    authorizationNote(req, res, next){
        const userId = req.decode.id
        const { id } = req.params

        Note.findById(id)
            .then(note =>{
                if(note){
                    if(note.userId + '' != userId){
                        next({
                            status: 403,
                            msg: 'Unathorized'
                        })
                    } else{
                        next()
                    }
                }
                else {
                    next({
                        status: 404,
                        msg: 'Data not found'
                    })
                }
            })
            .catch(next)
    }
}