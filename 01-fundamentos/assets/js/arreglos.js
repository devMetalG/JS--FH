// const arr = new Array(10) // una forma diferente de crear un arreglo
// const arr = [] // forma tradicional
// console.log(arr)

let videogames = ['Mario 3', 'Halo', 'Dead By Daylight']
console.log({videogames})
console.log(videogames[0])

let arrayThings = [
  true,
  124,
  'Memo',
  function(){},
  () => {},
  {a: 1},
  ['X', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. Willy',
    'Woodman'
  ]]
]

console.log(arrayThings[0])
console.log(arrayThings[2])
console.log(arrayThings[6][3])
console.log(arrayThings[6][4][1])