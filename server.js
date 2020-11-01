const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const port = process.env.PORT || 4000;
const setRoute = require("./routers");


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))


app.use(morgan('dev'))
app.use(cors())
setRoute(app)


require('dotenv').config()


const server = http.createServer(app);

global.io = socketIo(server);
// require('./socket.js')


// Database Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@reservation-management.fiyr5.mongodb.net/test`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Live Database Connected...')

    server.listen(port, () => console.log(`Listening on port ${port}`));

})