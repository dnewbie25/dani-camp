// @flow
import { numberFormat } from './numberFormat.js'

const subway = document.getElementById('subway-card__img')
const toppingsBtns = document.querySelectorAll('#toppings button')
const rate = document.getElementById('subs-second__value')
const total = document.querySelector('#subway-card__total p')

let multiplier = 0
let currentValue = 0
let subsPerSecond = 0
const toppings = {
  toppings__1: 0.02,
  toppings__2: 0.05,
  toppings__3: 0.07,
  toppings__4: 0.1
}

const biteSound = new Audio('./img/mmmm-102363.mp3')

/**
 * Handles the event when the subway image is clicked.
 * Increases the current value by one and updates the total value in the DOM.
 * Also plays a sound effect.
 * @function
 * @name handleSubwayClick
 * @param {Event} e - The click event.
 */
subway.addEventListener('click', (e) => {
  currentValue += 1
  total.textContent = numberFormat(Math.round(currentValue))
  biteSound.play()
  setTimeout(() => {
    biteSound.pause()
    biteSound.currentTime = 0
  }, 500)
})

/**
 * Adds a click event listener to each topping button.
 * When clicked, it will increase the multiplier and subsPerSecond by the value of the topping.
 * @function
 * @name addToppingEvents
 */
toppingsBtns.forEach(topping => {
  topping.addEventListener('click', () => {
    multiplier = Number((multiplier + toppings[topping.id]).toFixed(2))
    subsPerSecond = Number((multiplier + subsPerSecond).toFixed(2))
  })
})

/**
 * Updates the value of the sandwich every second by the subsPerSecond amount
 * @function
 * @name updateSubsPerSecond
 * @param {number} subsPerSecond the number of subs to add every second
 */
setInterval(() => {
  if (multiplier === 0) {
    rate.textContent = 0
  } else {
    currentValue += (subsPerSecond)
    total.textContent = numberFormat(Math.round(currentValue))
    rate.textContent = numberFormat(subsPerSecond)
  }
  document.title = `${currentValue} subs - Subway Clicker`
}, 1000)

