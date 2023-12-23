import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
  // element.innerHTML = 'Loading...'
  const id = '5d86371f25a058e5b1c8a65e'
  
  const heroIDs = heroes.map( hero => hero.id)
  const heroPromises = getHeroesAsync(heroIDs)

  for await(const hero of heroPromises) {
    element.innerHTML += `${hero.name}<br/>`
  }
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}