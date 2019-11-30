const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const passwordSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    URL: {
        type: String,
        match: [/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Invalid URL format'],
        required: [true, 'URL is required']
    },
    username: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    note: {
        type: String,
    }

})

module.exports  = mongoose.model('Password', passwordSchema)