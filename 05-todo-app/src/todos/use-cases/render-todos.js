import { createTodo } from "./create-todo-html"

/**
 * 
 * @param {String} elementID 
 * @param {Todo} todos 
 */
export const renderTodos = (elementID, todos = []) => {

  // TODO: referencia
  const element = document.querySelector(elementID)

  todos.forEach(todo => {
    element.appendChild(createTodo(todo))
  })
}