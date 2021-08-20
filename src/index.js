import React from 'react'
import ReactDom from 'react-dom'

const name = 'Богдан'
const sirname = 'Хомутов'
const element = <h1> Hello World меня зовут: {name} {sirname}</h1>
console.log(element)
ReactDom.render(element, document.getElementById('root'))