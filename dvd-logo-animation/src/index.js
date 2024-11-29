import "./styles.css";

const container = document.getElementById('container')
const dvd = document.getElementById('logo')
const fps = 120

// Make the container have the same size as the whole screen. The units are very important here so there is no ambiguity in the browser
container.style.height = window.innerHeight + 'px'
container.style.width = window.innerWidth + 'px'

// the logo will appear at a random place in screen
let x = Math.floor(Math.random() * (window.innerWidth - dvd.offsetWidth))
let y = Math.floor(Math.random() * (window.innerHeight - dvd.offsetHeight))
let xSpeed = 1
let ySpeed = 1

/**
 * Updates the position of the DVD logo in the DOM.
 * @function
 */
function moveAround(){
  dvd.style.left = x  + 'px'
  dvd.style.top = y + 'px'
}

// A loop must be created to continue moving the DVD logo

setInterval(()=>{  
  if(x + dvd.clientWidth >= window.innerWidth){
    xSpeed = -xSpeed
  }
  if(x<=0){
    xSpeed = -xSpeed
  }
  if(y + dvd.clientHeight >= window.innerHeight){
    ySpeed = -ySpeed
  }
  if(y<=0){
    ySpeed = -ySpeed
  }
  x += xSpeed
  y += ySpeed
  moveAround()
  checkCorner()
}
, 1000/fps) // that way 1000/fps will render at 120 frames per second (1 second = 1000 ms)

/**
 * Checks if the DVD logo has reached any of the four corners of the window.
 * If so, an alert will pop up saying "Border reached! Go get a life".
 * @function
 */
function checkCorner() {
  const corners = [
    { x: 0, y: 0 },
    { x: window.innerWidth - dvd.offsetWidth, y: 0 },
    { x: 0, y: window.innerHeight - dvd.offsetHeight },
    { x: window.innerWidth - dvd.offsetWidth, y: window.innerHeight - dvd.offsetHeight },
  ];

  corners.forEach((corner) => {
    if (x === corner.x && y === corner.y) {
      alert('Border reached! Go get a life');
    }
  });
}

