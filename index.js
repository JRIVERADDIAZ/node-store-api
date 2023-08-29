require('dotenv').config()
require('express')

//async errors
const express = require('express')
const app = express()

const connectDB = require('./connect/connect')
const productRouter = require('./routes/products')

// middlewares
const notFoundMiddleWare = require('./middleware/error-handler')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API </h1> <a href="/static">products</a>')
})
app.use('/static', productRouter)

// products route

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        // run the server
        app.listen(port, () => {
            const localhostURL = `http://localhost:${port}`;
            console.log(`Server running on port: ${localhostURL}`);
        })
        //  connectdb
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log('error', error);
    }
}

start()