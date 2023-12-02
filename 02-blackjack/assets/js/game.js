/*
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
*/
const toast = document.querySelector('.toast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)

let deck = []
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for( tipo of tipos) {
      deck.push(i + tipo)
    }
  }

  for (const tipo of tipos) {
    for (const esp of especiales) {
      deck.push(esp + tipo)
    }
  }
  deck = _.shuffle(deck)
  console.log(deck)
  return deck
}

crearDeck()

const pedirCarta = () => {
  if (deck.length === 0) {
    toastBootstrap.show()
    return
  }
  const carta = deck.pop()
  return carta
}

const valorCarta = carta => {
  const valor = carta.substring(0, carta.length - 1)

  return isNaN(valor) 
    ? valor === 'A' ?  11 :  10 
    : Number(valor) 
}

const valor = valorCarta(pedirCarta())
console.log(valor)