const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const contactSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    Title: {
        type: String,
    },
    firstName: {
        type: String,
        required: [true, 'name is required']
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    gender: {
        type: String,
    },
    company: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        validate: [{
          validator: function(value) {
            // if provided value include +62 the rest of number should be >= 8 digits
            // if provided value not included +62, it should be >= 8 digits too
            let phone = value.replace("+62", "")
            if(phone.length < 8) {
              return false
            }
            return true
          },
          message: props => `phone number min 8 digits`
        }, {
          validator: function(value) {
            // if provided value include +62 the rest of number cannot be more than 13 digits
            // if provided value not included +62, it cannot be more than 13 digits too
            let phone = value.replace("+62", "")
            if(phone.length > 13) {
              return false
            }
            return true
          },
          message: props => `phone number max 13 digits`
        }]
    },
    note: {
        type: String,
    }

})

contactSchema.pre('validate',function(done){
    if(this.phone.substring(0,3) !== '+62') {
      this.phone = '+62' + this.phone
    }
    done()
})

module.exports  = mongoose.model('Contact', contactSchema)