const controllers = {
    upload: (req, res) => {
        console.log(req.file, req.body)
    },
    notFound: (req, res) => {
        res.status(404)
            .send('Error, Not Found')
    }
}

module.exports = controllers