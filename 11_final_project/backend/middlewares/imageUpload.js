const multer = require("multer")
const path = require("path")

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = ""

        if (req.baseUrl.includes("user")) {
            folder = "users"
        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}/`)
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))

        // suggestions uuid to generate uniques ids
    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Accept only PNG or JPG"))
        }

        cb(undefined, true)
    }
})

module.exports = { imageUpload }