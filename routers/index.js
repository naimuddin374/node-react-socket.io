const userRouter = require('./userRouter')
const authRouter = require('./authRouter')
const reservationRouter = require('./reservationRouter')
const tableRouter = require('./tableRouter')



const routes = [
    {
        path: '/api/auth',
        handler: authRouter
    },
    {
        path: '/api/users',
        handler: userRouter
    },
    {
        path: '/api/reservations',
        handler: reservationRouter
    },
    {
        path: '/api/tables',
        handler: tableRouter
    },
    {
        path: '/',
        handler: (req, res) => res.send({ response: "Welcome our app" }).status(200)
    },
    {
        path: '*',
        handler: (req, res) => res.send({ response: "404 Page Not Found!" }).status(200)
    }
]

module.exports = app => {
    routes.forEach(r => {
        app.use(r.path, r.handler)
    })
}