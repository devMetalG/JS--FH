import _ from 'underscore';
import './style.css'
const miModulo = (() => {
  'use strict'
  const body = document.querySelector('body'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevo'),
        spans = document.querySelectorAll('span'),
        divCartasJugador = document.querySelectorAll('.div-cartas')
  
  let deck = []
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K']

  let puntosJugadores = []

  const inicializarJuego = (numJugadores = 2) =>{
    deck = crearDeck()
    puntosJugadores = []
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0)
    }
    
    spans.forEach(span => span.textContent = 0)
    
    btnDetener.disabled = false
    btnPedir.disabled = false
    
    divCartasJugador.forEach(jugador => limpiarHTML(jugador))
  }
  
  const crearDeck = () => {
    deck = []
    let tipo = ''
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
    return _.shuffle(deck)
  }
  
  const pedirCarta = () => {
    if (deck.length === 0) {
      crearAlerta('No hay más cartas')
      return
    }
    return deck.pop()
  }
  
  const valorCarta = carta => {
    const valor = carta.substring(0, carta.length - 1)
  
    return isNaN(valor) 
      ? valor === 'A' ?  11 :  10 
      : Number(valor) 
  }

  const acumularPuntos =  (turno, carta) => {
    puntosJugadores[turno] += valorCarta(carta)
    spans[turno].textContent = puntosJugadores[turno]
    return puntosJugadores[turno]
  }

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('IMG')
    imgCarta.classList.add('carta')
    imgCarta.src = `assets/cartas/${carta}.png`
  
    divCartasJugador[turno].appendChild(imgCarta)
  }

  const determinarGanador = () => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores

    if (puntosMinimos === puntosComputadora) {
      crearAlerta('Empate!')
    } else if (puntosComputadora > 21) {
      crearAlerta('Ganaste!')
    } else if (puntosComputadora > puntosMinimos && puntosComputadora <= 21) {
      crearAlerta('Gano la computadora')
    } 
  }
  
  // Turno de la computadora
  const turnoComputadora = puntosMinimos => {
    let puntosComputadora = 0
    do {
      const carta = pedirCarta()
      puntosComputadora = acumularPuntos(puntosJugadores.length - 1,carta)
      crearCarta(carta, puntosJugadores.length - 1)
  
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
  
    determinarGanador()  
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
  
  function limpiarHTML (section) {
    while(section.firstChild){
      section.removeChild(section.firstChild)
    }
  }
  
  // Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta() 
    const puntosJugador = acumularPuntos(0, carta)
  
    crearCarta(carta, 0)
  
    if (puntosJugador > 21) {
      crearAlerta('Gano la computadora')
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoComputadora(puntosJugador)
    } else if (puntosJugador === 21) {
      crearAlerta('21! Genial')
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoComputadora(puntosJugador)
    }
  })
  
  btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true
    btnPedir.disabled = true
  
    turnoComputadora(puntosJugadores[0])
  })
  
  btnNuevoJuego.addEventListener('click', () => {
    inicializarJuego()
  })

  return {
    nuevoJuego: inicializarJuego
  }
})()
