let games = ['Halo', 'Dead By Daylight', 'Elden Ring', 'Spider-Man']
console.log(`Largo: ${games.length}`)

let primero = games[0]
let ultimo = games[games.length - 1]

console.log(primero)
console.log(ultimo)

games.forEach(game => {
  console.log(game)
})

games.push('Chess')
console.log(games)

games.unshift('Gears Of War')
console.log(games)

games.pop()
console.log(games)

games.shift()
console.log(games)

let position = 0
games.splice(position, 1)
console.log(games)

let indexGame = games.indexOf('Elden Ring')
console.log(indexGame)