const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMessage("The title is required.")
            .isString()
            .withMessage("The title is required.")
            .isLength({ min: 3 })
            .withMessage("The title needs at least 3 characters."),
        body("image")
            .custom((value, {req}) => {
                if(!req.file) {
                    throw new Error("The image is required.")
                }

                return true
            })
    ]
}

module.exports = {
    photoInsertValidation
}