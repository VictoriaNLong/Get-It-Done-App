const jwt = require('jsonwebtoken')

const checkAuth = async(req, res, next) => {
    const token = req.cookies.access_token
    if(!token){
        return res.json('no token available')
    }
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.json('invalid toke')
        }
            req.user = decoded
            return next()
        
    })
}

module.exports = checkAuth