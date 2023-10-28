const bcrypt = require('bcrypt')
const User = require('../models/User')

const register = async(req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password){
        return res.json('required field name, email, password')
    }

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        const user = await newUser.save()
        return res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err);
      }
    }

const login = () => {

}

module.exports = register;