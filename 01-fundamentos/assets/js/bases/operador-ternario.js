const semana = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
}

const dia = new Date().getDay()
const hora = new Date().getHours()

let horaApertura
let mensaje

[0, 6].includes(dia) 
  ? (horaApertura = 11, hora >= horaApertura
    ? mensaje = 'Abierto'
    : mensaje = 'Cerrado')
  : (horaApertura = 9, hora >= horaApertura
    ? mensaje = 'Abierto'
    : mensaje = 'Cerrado')

console.log(mensaje)