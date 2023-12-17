import { Todo } from '../todos/models/todo.model'

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del poder'),
    new Todo('Piedra del tiempo')
  ],
  filter: Filters.All
}

const initStore = () => {
  console.log(state)
  console.log('InitStore🔥')
}

const loadStore = () => {
  throw new Error('Not implemented')
}

const addTodo = todo => {
  throw new Error('Not implemented')
}

const toggleTodo = todoID => {
  throw new Error('Not implemented')
}

const deleteTodo = todoID => {
  throw new Error('Not implemented')
}

const deleteCompleted = () => {
  throw new Error('Not implemented')
}

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented')
}

const getCurrentFilter = () => {
  throw new Error('Not implemented')
}


export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
}