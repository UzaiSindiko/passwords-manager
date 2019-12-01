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
        const { id } = req.params
        const { note, name } = req.body
        Note.findByIdAndUpdate(id, { note, name })
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

    static search(req, res, next) {
        const{ q } = req.query
        const userId = req.decode.id    
            Note.find({
                $or: [   
                    {
                        name: {
                            $regex: `${q}`, $options: 'i'
                        }
                    },
                    {
                        note: {
                            $regex: `${q}`, $options: 'i'
                        }
                    }
                ],
            userId
            })
            .then(contacts => {
                res.status(200).json(contacts)
            })
            .catch(next)
    }

}

module.exports = NoteController