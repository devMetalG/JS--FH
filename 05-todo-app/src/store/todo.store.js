import { Todo } from '../todos/models/todo.model'

export const Filters = {
  All: 'All',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [],
  filter: Filters.All
}

const initStore = () => {
  loadStore()
  console.log('InitStore🔥')
}

const loadStore = () => {
  if (!localStorage.getItem('state')) return

  const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'))
  state.todos = todos
  state.filter = filter
}

const saveStateToLS = () => {
  localStorage.setItem('state', JSON.stringify(state))
}

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos]
    case Filters.Completed:
      return state.todos.filter(todo => todo.done)
    
    case Filters.Pending:
      return state.todos.filter(todo => !todo.done)
  
    default:
      throw new Error(`Option ${filter} is not valid.`)
  }
}

const addTodo = description => {
  if (!description) throw new Error('Description is required.')

  state.todos.push(new Todo(description))
  saveStateToLS()
}

const toggleTodo = todoID => {
  state.todos = state.todos.map(todo => {
    if (todo.id === todoID) {
      todo.done = !todo.done
    }
    return todo
  })
  saveStateToLS()
}

const deleteTodo = todoID => {
  state.todos = state.todos.filter(todo => todo.id !== todoID )
  saveStateToLS()
}

const deleteCompleted = () => {
  state.todos = state.todos.filter(todo => !todo.done )
  saveStateToLS()
}

const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter
  saveStateToLS()
}

const getCurrentFilter = () => {
  return state.filter
}


export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
}