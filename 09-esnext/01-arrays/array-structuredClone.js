const superHeroes = [
  {
    id: 1,
    name:'batman'
  },
  {
    id: 2,
    name:'Superman'
  },
  {
    id: 3,
    name:'Aquaman'
  },
  {
    id: 4,
    name:'Wonderwoman'
  },
]

// Hacer uso del spread operator si dentro del arreglo hay primitivos
// const superHeroesCopy = [...superHeroes]

// Structured Clone
const superHeroesCopy = structuredClone(superHeroes)

superHeroesCopy[3].name = 'Flash'
console.table(superHeroes)
console.table(superHeroesCopy)