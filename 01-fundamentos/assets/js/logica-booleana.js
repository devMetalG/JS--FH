const regresaTrue =  () => {
  console.log('Regresa True')
  return true
}

const regresaFalse =  () => {
  console.log('Regresa False')
  return false
}

console.warn('Not o negacion')
console.log(true)
console.log(!true)
console.log(!false)
console.log(!regresaFalse())

console.warn('And')
console.log(true && true)
console.log(true && false)
console.log(true && !false)
console.log(false && false)
console.log('=============')
console.log(regresaFalse() && regresaTrue())
console.log(regresaTrue() && regresaFalse())

console.warn('OR')
console.log(true || false)
console.log(true || true)
console.log(false || false)

console.log('=============')
console.log(regresaFalse() || regresaTrue())
console.log(regresaTrue() || regresaFalse())

console.warn('Asignaciones')

const soyNull = null
const soyUndefined = undefined
const soyFalse = false

const a1 = true && 'Hola Mundo'
const a2 = 'Hola' && 'Mundo'
const a3 = soyFalse || 'Ya no soy falso'
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso'
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso'
console.log({a1, a2, a3, a4, a5})