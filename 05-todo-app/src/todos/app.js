import todoStore from '../store/todo.store'
import html from './app.html?raw'
import { renderTodos } from './use-cases'

const elementIDs = {
  todoList: '.todo-list'
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
}