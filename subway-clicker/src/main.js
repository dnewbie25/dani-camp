// @flow
import { numberFormat } from "./numberFormat.js"

const subway = document.getElementById('subway-card__img')
const tomato = document.getElementById('toppings__1')
const lettuce = document.getElementById('toppings__2')
const onions = document.getElementById('toppings__3')
const beef = document.getElementById('toppings__4')
const rate = document.getElementById('subs-second__value')
const total = document.querySelector('#subway-card__total p')

let currentValue = 0
let subsPerSecond = 0
let currentTime = new Date().getTime()

document.addEventListener('click',e=>{
  if(e.target.id==='subway-card__img'){
    subsPerSecond += 1
    rate.textContent = Math.round(subsPerSecond/(new Date().getTime()-currentTime)*1000,0)
  }
})

subway.addEventListener('click',e=>{
  currentValue += 1
  total.textContent = numberFormat(currentValue)
})


