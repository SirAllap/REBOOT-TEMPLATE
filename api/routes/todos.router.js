const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllTodos,
  updateTodo,
  deleteTodo,
  createTodo
} = require('../controllers/todos.controller')

router.get('/', getAllTodos)
router.post('/', createTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router
