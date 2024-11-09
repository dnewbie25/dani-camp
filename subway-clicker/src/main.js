// @flow
import { numberFormat } from './numberFormat.js'

const subway = document.getElementById('subway-card__img')
const tomato = document.getElementById('toppings__1')
const lettuce = document.getElementById('toppings__2')
const onions = document.getElementById('toppings__3')
const beef = document.getElementById('toppings__4')
const rate = document.getElementById('subs-second__value')
const total = document.querySelector('#subway-card__total p')

let multiplier = 0
let currentValue = 0
let subsPerSecond = 0

const biteSound = new Audio('./img/mmmm-102363.mp3')

subway.addEventListener('click', () => {
  currentValue += 1
  total.textContent = Math.round(numberFormat(currentValue))
  biteSound.play()
  setTimeout(() => {
    biteSound.pause()
    biteSound.currentTime = 0
  }, 500)
})

tomato.addEventListener('click', () => {
  multiplier = Number((multiplier + 0.02).toFixed(2))
  subsPerSecond = Number((multiplier + subsPerSecond).toFixed(2))
  console.log(multiplier)
})

lettuce.addEventListener('click', () => {
  multiplier = Number((multiplier + 0.05).toFixed(2))
  subsPerSecond = Number((multiplier + subsPerSecond).toFixed(2))
  console.log(multiplier)
})

onions.addEventListener('click', () => {
  multiplier = Number((multiplier + 0.07).toFixed(2))
  subsPerSecond = Number((multiplier + subsPerSecond).toFixed(2))
  console.log(multiplier)
})

beef.addEventListener('click', () => {
  multiplier = Number((multiplier + 0.15).toFixed(2))
  subsPerSecond = Number((multiplier + subsPerSecond).toFixed(2))
  console.log(multiplier)
})

setInterval(() => {
  if (multiplier === 0) {
    console.log('the multiplier value is', multiplier)
    rate.textContent = 0
  } else {
    currentValue += (subsPerSecond)
    total.textContent = Math.round(currentValue)
    rate.textContent = subsPerSecond
    console.log('subs per second is', subsPerSecond)
  }
}, 1000)
