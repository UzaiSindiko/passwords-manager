const Pass = require('../models/Password')

class PassController {

    static create(req, res, next){
        const userId = req.decode.id
        const { name, URL, username, password, note } = req.body
        Pass.create({ userId, name, URL, username, password, note})
            .then(pass => {
                res.status(201).json(pass)
            })
            .catch(next)
    }

    static update(req, res, next){
        const { id } = req.params
        const userId = req.decode.id
        const { name, URL, username, password, note } = req.body
        Pass.findByIdAndUpdate(id, {userId, name, URL, username, password, note}, { omitUndefined: true, new: true })
            .then(pass => {
                res.status(200).json(pass)
            })
            .catch(next)
    }

    static find(req, res, next){
        const userId = req.decode.id
        Pass.find({ userId })
            .then(pass => {
                res.status(200).json(pass)
            })
            .catch(next)
    }

    static findOne(req, res, next){
        const { id } = req.params
        Pass.findById(id)
            .then(pass => {
                res.status(200).json(pass)
            })
            .catch(next)
    }

    static delete(req, res, next){
        const { id } = req.params
        Pass.findByIdAndDelete(id)
            .then(pass => {
                res.status(200).json(pass)
            })
            .catch(next)
    }

}

module.exports = PassController