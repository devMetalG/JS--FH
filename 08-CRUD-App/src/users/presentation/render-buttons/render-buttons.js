import './render-buttons.css'
import usersStore from '../../store/users-store'
import { RenderTable } from '../render-table/render-table'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderButtons = (element) => {
  const nextButton = document.createElement('button')
  nextButton.textContent = ' Next >'

  const previousButton = document.createElement('button')
  previousButton.textContent = '< Prev '

  const currentPageLabel = document.createElement('span')
  currentPageLabel.id = 'current-page'
  currentPageLabel.textContent = usersStore.getCurrentPage()

  element.append(previousButton, currentPageLabel, nextButton)

  nextButton.addEventListener('click', async() => {
    await usersStore.loadNextPage()
    currentPageLabel.textContent = usersStore.getCurrentPage()
    RenderTable(element)
  })

  previousButton.addEventListener('click', async() => {
    await usersStore.loadPreviousPage()
    currentPageLabel.textContent = usersStore.getCurrentPage()
    RenderTable(element)
  })
}