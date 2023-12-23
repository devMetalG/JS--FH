/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
  // const myGenerator = myFirstGeneratorFunction()
  // console.log(myGenerator.next())
  const genID = idGenerator()
  const button = document.createElement('button')
  button.textContent = 'Click me!'
  element.appendChild(button)
  const renderButton = () => {
    const { value } = genID.next()
    button.innerText = `Click: ${value}`
  }

  button.addEventListener('click', renderButton)
}

function* idGenerator() {
  let currentID = 0
  while (true) {
    yield ++currentID
  }
}

function* myFirstGeneratorFunction(){
  yield 'primer valor'
  yield 'segundo valor'
  yield 'tercer valor'
  yield 'cuarto valor'
  return 'No hay valores'
}