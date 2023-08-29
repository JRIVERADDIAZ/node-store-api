const notFoundMiddleWare = (req, res) => {
    res.status(404).send('Route doesnt found or exit')
}

module.exports = notFound