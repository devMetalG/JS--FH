const state = [
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

const index = 1
const newName = 'SuperGirl'

const newState = state.with(index , {
  ...state.at(index),
  name: newName
})

state[0].name = 'Robin'
console.table(newState)

console.log('El ultimo: ', state.at(-1))