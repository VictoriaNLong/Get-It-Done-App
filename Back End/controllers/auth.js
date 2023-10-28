const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = async(req, res) => {
    console.log("register")
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

const login = async(req, res) => {
    console.log("login")
    if(!req.body.email || !req.body.password){
        return res.json('required field email, password')
    }
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(404).json("no user found")
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password)
        if(!correctPassword){
            return res.json('incorrect password')
        }
        const payload = {
            id: user._id,
            name: user.name
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
        return res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json({'message:': "login successful"})
    }catch (err) {
        res.status(500).json(err);
      }
}

module.exports = {register, login}
