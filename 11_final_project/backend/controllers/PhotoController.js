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

    if (!newPhoto) {
        res.status(422).json({
            errors: ["Something went wrong. Try again later!"]
        })
        return
    }

    res.status(201).json(newPhoto)
}

const deletePhoto = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user

    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id))

        if (!photo) {
            res.status(404).json({ errors: ["Photo not found!"] })
            return
        }

        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Something went wrong. Try again later!"] })
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({ id: photo._id, message: "Photo deleted!" })
    } catch (error) {
        res.status(404).json({ errors: ["Photo not found!"] })
        return
    }
}

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
}