const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const todosRouter = require('./todos.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/todos', authUser, todosRouter)

router.get('/me', authUser, (req, res) => {
  res.json(res.locals.user)
})

const UserModel = require('../models/users.model')
router.put('/me', authUser, (req, res) => {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, {
      photoUrl: req.body.photoUrl
    })
    .then(response => res.json(response))
})

module.exports = router
