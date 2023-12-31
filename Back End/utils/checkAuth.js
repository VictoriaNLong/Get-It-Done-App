const jwt = require("jsonwebtoken");
const createError = require("./createError");

const checkAuth = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError({ status: 401, message: "Unauthorized" }));
  }
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(createError({ status: 401, message: "Invalid token" }));
    }
    req.user = decoded;
    return next();
  });
};

module.exports = checkAuth;
