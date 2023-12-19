import { createTodo } from "./create-todo-html"

let element

/**
 * 
 * @param {String} elementID 
 * @param {Todo} todos 
 */
export const renderTodos = (elementID, todos = []) => {
  if (!element) 
    element = document.querySelector(elementID)
  // TODO: referencia
  if (!element) throw new Error(`Element ${elementID} not found.`)

  element.innerHTML = ''

  todos.forEach(todo => {
    element.appendChild(createTodo(todo))
  })
}