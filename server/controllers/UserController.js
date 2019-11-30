const User = require('../models/User')
const { generateToken } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')

class UserController {

    static register(req, res, next){
        const { email, password } = req.body
        User.create({ email, password })
            .then(user =>{
                const payload = {
                    id : user._id
                }
               let token = generateToken(payload)
               res.status(201).json({token})
            })
            .catch(next)
    }

    static login(req, res, next){
        const { email, password } = req.body
        User.findOne({ email })
            .then(user =>{
                if(user && compare(password, user.password)){
                   const payload = {
                    id : user._id
                   }
                   let token = generateToken(payload)
                   res.status(201).json({token})
                }
                else {
                    next({
                        status: 400,
                        msg: 'email or password is wrong'
                    })
                }
            })
            .catch(next)
    }

}

module.exports = UserController