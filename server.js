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

const io = socketIo(server);

let interval;


io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        getApiAndEmit(socket)
    }, 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});



const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

// Database Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@reservation-management.fiyr5.mongodb.net/test`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Live Database Connected...')

    server.listen(port, () => console.log(`Listening on port ${port}`));

})