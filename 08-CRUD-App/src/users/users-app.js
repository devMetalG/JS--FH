import { RenderAddButton } from './presentation/render-add-button/render-add-button'
import { RenderButtons } from './presentation/render-buttons/render-buttons'
import { RenderTable } from './presentation/render-table/render-table'
import usersStore from './store/users-store'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async element => {
  element.innerHTML = 'Loading...'
  await usersStore.loadNextPage()
  element.innerHTML = ''

  RenderTable(element)
  RenderButtons(element)
  RenderAddButton(element)
}