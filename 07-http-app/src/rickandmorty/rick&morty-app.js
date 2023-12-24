import _ from 'underscore'

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const getCharacter = async id =>  {
  const url = `https://rickandmortyapi.com/api/character/${id}`
  const response = await fetch(url)
  const result = await response.json()
  return result
} 

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMortyApp = async element => {
  document.querySelector('#app-title').innerHTML = 'Rick&Morty App'
  element.innerHTML = 'Loading...'

  const id = _.random(1, 826)
  id.toString()
  const { name, image, species } = await getCharacter(id)
  element.innerHTML = `
    <h1>${name}</h1>
    <img src="${image}">
    <h3>${species}</h3>`
  
}



