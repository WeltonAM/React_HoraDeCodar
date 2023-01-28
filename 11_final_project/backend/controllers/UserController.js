const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_PASS

const generateToken = (id) => {
    return jwt.sign({id, jwtSecret}, { expiresIn: "10d"})
}

// register user and sign in
const register = async(req, res) => {
    res.send("Register")
}

module.exports = {
    register,
}