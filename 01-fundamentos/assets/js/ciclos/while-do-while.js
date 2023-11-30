const carros = ['Ford', 'Mazda', 'Honda', 'Toyota']

console.warn('Do While')
let i = 0
while (i < carros.length) {
  console.log(carros[i])
  i++
}

console.log('===============')
i = 0
while (carros[i]) {
  if (i === 1) {
    i++
    continue
  }
  console.log(carros[i])
  i++
}

console.warn('Do While')
i = 0
do{
  console.log(carros[i])
  i++
}while(carros[i])