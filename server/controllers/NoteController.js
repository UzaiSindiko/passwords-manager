const Note = require('../models/Note')

class NoteController {

    static create(req, res, next){
        const userId = req.decode.id
        const { note, name } = req.body
        Note.create({userId, note, name})
            .then(note => {
                res.status(201).json(note)
            })
            .catch(next)
    }

    static update(req, res, next){
        const { note, name } = req.body
        Note.create({ note, name })
            .then(note => {
                res.status(200).json(note)
            })
            .catch(next)
    }

    static find(req, res, next){
        const userId = req.decode.id
        Note.find({ userId })
            .then(notes =>{
                res.status(200).json(notes)
            })
            .catch(next)
    }

    static findOne(req, res, next){
        const { id } = req.params
        Note.findById(id)
            .then(notes =>{
                res.status(200).json(notes)
            })
    }

    static delete(req, res, next){
        const { id } = req.params
        Note.findOneAndDelete(id)
            .then(notes =>{
                res.status(200).json(notes)
            })
            .catch(next)
    }

}

module.exports = NoteController