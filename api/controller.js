const controllers = {
    upload: (req, res) => {
        // console.log(req.file, req.body)
        res.json({
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        })
    },
    notFound: (req, res) => {
        res.status(404)
            .send('Error, Not Found')
    }
}

module.exports = controllers