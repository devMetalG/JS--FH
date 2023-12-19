import todoStore, { Filters } from '../store/todo.store'
import html from './app.html?raw'
import { renderTodos } from './use-cases'

const elementIDs = {
  todoList: '.todo-list',
  newTodoInput: '#new-todo-input',
  destroy: '.destroy',
  clearCompleted: '.clear-completed',
  todoFilters: '.filtro'
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
  const clearCompleted = document.querySelector(elementIDs.clearCompleted)
  const filtersLI = document.querySelectorAll(elementIDs.todoFilters)

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

  clearCompleted.addEventListener('click', () => {
    todoStore.deleteCompleted()
    displayTodos()
  })

  filtersLI.forEach(filter => {
    filter.addEventListener('click', filter => {
      filtersLI.forEach(el => el.classList.remove('selected'))
      filter.target.classList.add('selected')
      console.log(filter.target.text)
      switch (filter.target.text) {
        case 'Todos':
          todoStore.setFilter(Filters.All)
          break;
        case 'Pendientes':
          todoStore.setFilter(Filters.Pending)
          break;
        case 'Completados':
          todoStore.setFilter(Filters.Completed)
          break;
      }
      displayTodos()
    })
  })
}