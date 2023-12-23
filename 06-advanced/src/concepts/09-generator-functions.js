/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
  const myGenerator = myFirstGeneratorFunction()

  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
}

function* myFirstGeneratorFunction(){
  yield 'primer valor'
  yield 'segundo valor'
  yield 'tercer valor'
  yield 'cuarto valor'
  return 'No hay valores'
}