import { Todo } from "../models/todo.model"

/**
 * 
 * @param {Todo} todo 
 */
export const createTodo = todo => {
  if(!todo) throw new Error('A Todo object is required.')

  const html = `<h2>${todo.description}</h2>`
  const liElement = document.createElement('LI')
  liElement.innerHTML = html

  return liElement
}