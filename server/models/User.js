const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { hash } = require('../helpers/bcrypt')

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format'],
        validate: {
            validator: function(v){
                return this.model('User').findOne({ email: v }).then(user => !user)
            },
            message: props => `${props.value} is already used by another user`
        },
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }

})

userSchema.pre('save', function(done){
    this.password = hash(this.password)
    done()
})


module.exports = mongoose.model('User', userSchema)