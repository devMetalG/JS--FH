import _ from 'underscore'

import { 
  crearDeck, 
  pedirCarta, 
  valorCarta,
  crearAlerta,
  limpiarHTML,
  crearCarta
} from './usecases'

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
    deck = crearDeck(tipos, especiales)
    puntosJugadores = []
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0)
    }
    
    spans.forEach(span => span.textContent = 0)
    
    btnDetener.disabled = false
    btnPedir.disabled = false
    
    divCartasJugador.forEach(jugador => limpiarHTML(jugador))
  }

  const acumularPuntos =  (turno, carta) => {
    puntosJugadores[turno] += valorCarta(carta)
    spans[turno].textContent = puntosJugadores[turno]
    return puntosJugadores[turno]
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
      const carta = pedirCarta(deck)
      puntosComputadora = acumularPuntos(puntosJugadores.length - 1,carta)
      const imgCarta = crearCarta(carta)
      divCartasJugador[puntosJugadores.length - 1].appendChild(imgCarta)

  
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
  
    determinarGanador()  
  }
  
  // Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck) 
    const puntosJugador = acumularPuntos(0, carta)
  
    const imgCarta = crearCarta(carta)
    divCartasJugador[0].appendChild(imgCarta)
  
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
