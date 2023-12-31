import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { RickAndMortyApp } from './src/rickandmorty/rick&morty-app'
import _ from 'underscore'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>
    <button id="another">Gen Character!</button>
  </div>
`
const element = document.querySelector('.card')
const another = document.querySelector('#another')
RickAndMortyApp(element, another)