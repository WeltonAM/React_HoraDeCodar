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
            errors: ["Something went wrong. Try again later."]
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
            res.status(404).json({ errors: ["Photo not found."] })
            return
        }

        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Something went wrong. Try again later."] })
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({ id: photo._id, message: "Photo deleted!" })
    } catch (error) {
        res.status(404).json({ errors: ["Photo not found."] })
        return
    }
}

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

const getUserPhotos = async (req, res) => {
    const { id } = req.params
    const photos = await Photo.find({ userId: id })
        .sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

const getPhotoById = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findById(mongoose.Types.ObjectId(id))

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found."] })
        return
    }

    return res.status(200).json(photo)
}

const updatePhoto = async (req, res) => {
    const { id } = req.params
    const { title } = req.body
    const reqUser = req.user
    const photo = await Photo.findById(id)

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found."] })
        return
    }

    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({ errors: ["Something went wrong. Try again later."] })
        return
    }

    if (title) {
        photo.title = title
    }

    await photo.save()

    res.status(200).json({ photo, message: "Photo updated!" })
}

const likePhoto = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user
    const photo = await Photo.findById(id)

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found."] })
        return
    }

    if(photo.likes.includes(reqUser._id)){
        res.status(422).json({errors: ["Already liked it."]})
        // photo.likes.pop(reqUser._id)
        // photo.save()
        return
    }

    photo.likes.push(reqUser._id)
    photo.save()

    res.status(200).json({photoId: id, userId: reqUser._id, message: "Liked!"})

}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto
}