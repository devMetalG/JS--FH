import { Todo } from "../models/todo.model"

/**
 * 
 * @param {Todo} todo 
 */
export const createTodo = todo => {
  if(!todo) throw new Error('A Todo object is required.')

  const {done, description, id} = todo

  const html = `
  <div class="view">
    <input class="toggle" type="checkbox" ${done? 'checked': ''}>
    <label>${description}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">`
  const liElement = document.createElement('LI')
  liElement.innerHTML = html
  liElement.dataset.id = id
  if (done) 
    liElement.classList.add('completed')

  return liElement
}