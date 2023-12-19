import todoStore from '../store/todo.store'
import html from './app.html?raw'
import { renderTodos } from './use-cases'

const elementIDs = {
  todoList: '.todo-list',
  newTodoInput: '#new-todo-input',
  destroy: '.destroy'
}

/**
 * 
 * @param {String} elementID 
 */
export const App = (elementID) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter())
    renderTodos(elementIDs.todoList, todos)
  }
 
  // Cuando la función App se llama
  (()=> {
    const app = document.createElement('DIV')
    app.innerHTML = html
    document.querySelector(elementID).appendChild(app)
    displayTodos()
  })()

  // Referencias
  const newDescriptionInput = document.querySelector(elementIDs.newTodoInput)
  const todoListUL = document.querySelector(elementIDs.todoList)

  // Listeners
  newDescriptionInput.addEventListener('keyup', e => {
    if (e.key !== 'Enter') return
    if (e.target.value.trim().length === 0) return

    todoStore.addTodo(e.target.value)
    displayTodos()
    e.target.value = ''
  })

  todoListUL.addEventListener('click', e => {
    const element = e.target.closest('[data-id]')
    todoStore.toggleTodo(element.getAttribute('data-id'))
    displayTodos()
  })
  
  todoListUL.addEventListener('click', e => {
    const destroy = e.target.className === 'destroy'
    if (destroy) {
      const id = e.target.closest('[data-id]').getAttribute('data-id')
      todoStore.deleteTodo(id)
      displayTodos()
    }
    
  })
}