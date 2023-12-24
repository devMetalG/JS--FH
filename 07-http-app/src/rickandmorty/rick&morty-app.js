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

const genRandom = () => {
  const random = _.random(1, 826).toString()
  return random
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {HTMLButtonElement} element 
 */
export const RickAndMortyApp = (element, btn) => {
  document.querySelector('#app-title').innerHTML = 'Rick&Morty App'

  btn.addEventListener('click', async () => {
    let { name, image, species } = await getCharacter(genRandom())
    element.innerHTML = `
    <h1>${name}</h1>
    <img src="${image}">
    <h3>${species}</h3>`
    btn.textContent = 'Another!'
  })
}





