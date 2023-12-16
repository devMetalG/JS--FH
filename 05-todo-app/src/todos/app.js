import html from './app.html?raw'
/**
 * 
 * @param {String} elementID 
 */
export const App = (elementID) => {
 
  // Cuando la función App se llama
  (()=> {
    const app = document.createElement('DIV')
    app.innerHTML = html
    document.querySelector(elementID).appendChild(app)
  })()
}