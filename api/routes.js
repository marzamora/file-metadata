const controller = require('./controller')
const multer = require('multer')
const upload = multer({dest:'uploads/'})

module.exports = (app) => {
    app.route('/api/fileanalyse')
        .post(upload.single('upfile'), controller.upload)
    app.route('*')
        .get(controller.notFound)
}