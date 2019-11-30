const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const noteSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Name can\'t be empty']
    },
    note: {
        type: String,
        required: [true, 'Note can\'t be empty']
    }

})

module.exports  = mongoose.model('Note', noteSchema)
