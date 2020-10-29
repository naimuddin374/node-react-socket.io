const userRouter = require('./userRouter')
const authRouter = require('./authRouter')



const routes = [
    {
        path: '/api/users',
        handler: userRouter
    },
    {
        path: '/api/auth',
        handler: authRouter
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