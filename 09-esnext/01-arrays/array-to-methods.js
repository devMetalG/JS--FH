const heroes = ['Batman','Superman','Aquaman','Wonderwoman']
// const heroesCopy = heroes

// toSorted
// const sortedHeroes = heroes.toSorted()

// reverseHeroes
// const reverseHeroes = heroes.toSorted().toReversed()

// splice
const deletedHero = heroes.toSpliced(0, 1, 'Robin')

console.table(heroes)
// console.table(sortedHeroes)
// console.table(reverseHeroes)
console.table(deletedHero)