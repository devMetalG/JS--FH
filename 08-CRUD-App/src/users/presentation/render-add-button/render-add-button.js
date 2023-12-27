import './render-add-button.css'

/**
 * 
 * @param {HTMLDivElement} element
 * @param {() => void} callback
 */
export const RenderAddButton = (element) => {
  const addButton = document.createElement('button')
  addButton.textContent = '+'
  addButton.classList.add('add-button')

  element.append(addButton)

  addButton.addEventListener('click', () => {
    throw Error('Not implemented.')
  })
}