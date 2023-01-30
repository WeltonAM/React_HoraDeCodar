const Photo = require("../models/Photos")
const User = require("../models/User")

const mongoose = require("mongoose")

const insertPhoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user
    const user = await User.findById(reqUser._id)

    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    })

    console.log(reqUser)

    if(!newPhoto){
        res.status(422).json({
            errors: ["Something went wrong. Try again later!"]
        })
    }

    res.status(201).json(newPhoto)
}

module.exports = {
    insertPhoto,
}