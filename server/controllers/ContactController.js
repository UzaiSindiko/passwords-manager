const Contact = require('../models/Contact')

class ContactController {

    static create(req, res, next){
        const userId = req.decode.id
        const {
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note 
        } = req.body
        
        Contact.create({
            userId,
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note
        })
        .then(contact => {
            res.status(201).json(contact)
        })
        .catch(next)
    }

    static update(req, res, next){
        const { id } = req.params
        const {
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note 
        } = req.body
        Contact.findByIdAndUpdate(id, {
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note 
        }, { omitUndefined: true, new:true })
        .then(contact => {
            res.status(200).json(contact)
        })
        .catch(next)
    }

    static find(req, res, next){
        const userId = req.decode.id
        Contact.find({ userId })
            .then(contacts =>{
                res.status(200).json(contacts)
            })
            .catch(next)
    }

    static findOne(req, res, next){
        const { id } = req.params
        Contact.findById(id)
            .then(contact =>{
                res.status(200).json(contact)
            })
            .catch(next)
    }

    static delete(req, res, next){
        const { id } = req.params
        Contact.findByIdAndDelete(id)
            .then(contact =>{
                res.status(200).json(contact)
            })
            .catch(next)
    }

    static search(req, res, next) {
        const{ q } = req.query
        const userId = req.decode.id    
            Contact.find({
                $or: [   
                    {
                        Title: {
                            $regex: `${q}`, $options: 'i'
                        }
                    },
                    {
                        firstName: {
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

module.exports = ContactController
