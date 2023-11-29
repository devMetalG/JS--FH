function saludo(name) {
  console.log(`Hola ${name}`)
}

saludo('Memo')

const saludo2 = function(name) {
  console.log(`Hola ${name}`)
}

saludo2('Memo2')

const saludoFlecha = name => {
  console.log(`Hola ${name}`)
}

saludoFlecha('Memo3')