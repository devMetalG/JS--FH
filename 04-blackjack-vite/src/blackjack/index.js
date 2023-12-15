import _ from 'underscore'

import { 
  crearDeck, 
  pedirCarta, 
  crearAlerta,
  limpiarHTML,
  crearCarta, 
  turnoComputadora,
  acumularPuntos
} from './usecases'

const miModulo = (() => {
  'use strict'
  const btnPedir = document.querySelector('#btnPedir'),
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
  
  // Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck) 
    const puntosJugador = acumularPuntos(0, carta, puntosJugadores)
  
    const imgCarta = crearCarta(carta)
    divCartasJugador[0].appendChild(imgCarta)
  
    if (puntosJugador > 21) {
      crearAlerta('Gano la computadora')
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoComputadora(puntosJugador, puntosJugadores, deck)
    } else if (puntosJugador === 21) {
      crearAlerta('21! Genial')
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoComputadora(puntosJugador, puntosJugadores, deck)
    }
  })
  
  btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true
    btnPedir.disabled = true
  
    turnoComputadora(puntosJugadores[0], puntosJugadores, deck)
  })
  
  btnNuevoJuego.addEventListener('click', () => {
    inicializarJuego()
  })

  return {
    nuevoJuego: inicializarJuego
  }
})()
