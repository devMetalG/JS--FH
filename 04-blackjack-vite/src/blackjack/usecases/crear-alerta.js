const body = document.querySelector('body')
/**
 * Crea una alerta del resultado de la partida
 * @param {String} msg Ejemplo: Ganaste!
 */
export function crearAlerta (msg) {
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