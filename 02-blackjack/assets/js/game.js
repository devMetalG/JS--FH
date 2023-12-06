/*
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
*/
const body = document.querySelector('BODY')
const btnPedir = document.querySelector('#btnPedir')
const spans = document.querySelectorAll('span')
const cartasJugador = document.querySelector('#jugador-cartas')
const cartasComputadora = document.querySelector('#computadora-cartas')

let deck = []
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0
let puntosComputadora = 0

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
    crearAlerta('No hay más cartas')
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

function crearAlerta (msg) {
  const toastContainer = document.createElement('DIV')
  toastContainer.classList.add('toast-container', 'top-0', 'end-0', 'p-3')
  toastContainer.setAttribute('data-bs-theme', 'dark')
  
  const toast = document.createElement('DIV')
  toast.classList.add('toast')
  toast.role = 'alert'
  toast.setAttribute('aria-live', 'assertive')
  toast.setAttribute('aria-atomic', 'true')

  const toastHeader = document.createElement('DIV')
  toastHeader.classList.add('toast-header')

  const strongA = document.createElement('STRONG')
  strongA.classList.add('me-auto')
  strongA.textContent = 'BlackJack'

  const smallA = document.createElement('SMALL')
  smallA.textContent = 'Justo Ahora'
  
  const btnClose = document.createElement('BUTTON')
  btnClose.type = 'button'
  btnClose.classList.add('btn-close')
  btnClose.setAttribute('data-bs-dismiss', 'toast')
  btnClose.setAttribute('aria-label', 'Close')

  const toastBody = document.createElement('DIV')
  toastBody.classList.add('toast-body')
  toastBody.textContent = msg

  toastHeader.appendChild(strongA)
  toastHeader.appendChild(smallA)
  toastHeader.appendChild(btnClose)

  toast.appendChild(toastHeader)
  toast.appendChild(toastBody)

  toastContainer.appendChild(toast)

  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
  toastBootstrap.show()

  body.appendChild(toastContainer)
}

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta() 
  puntosJugador += valorCarta(carta)
  spans[0].textContent = puntosJugador

  const imgCarta = document.createElement('IMG')
  imgCarta.classList.add('carta')
  imgCarta.src = `assets/cartas/${carta}.png`

  cartasJugador.appendChild(imgCarta)

  if (puntosJugador > 21) {
    crearAlerta('Perdiste')
    btnPedir.disabled = true
  } else if (puntosJugador === 21) {
    crearAlerta('21! Genial')
    btnPedir.disabled = true
  }
})
