import './render-buttons.css'
import usersStore from '../../store/users-store'
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
}