import "./styles.css";

const canvas = <HTMLCanvasElement>document.querySelector('#canvas');
const canvasLines = canvas.getContext('2d');

let isDrawing = false;
let startX: number, startY: number;
let lastX: number, lastY: number;

canvas.addEventListener('mousedown',startDrawing);
canvas.addEventListener('mouseup',stopDrawing);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseleave',stopDrawing);

/**
 * Listens for the window resize event and sets the canvas size when it is triggered.
 * It ensures that the canvas size is adjusted when the window is resized.
 * @listens window.resize
 */
window.addEventListener('resize',()=>{
  setCanvasSize();
})

/**
 * Listens for the window load event and sets the canvas size when it is triggered.
 * It ensures that the canvas size is adjusted when the window is first loaded.
 * @listens window.load
 */
window.addEventListener('load',()=>{
  setCanvasSize();
})



/**
 * Initiates the drawing operation on the canvas.
 * Sets the drawing flag to true and initializes the start and last coordinates
 * of the mouse to the position where the mouse button is pressed down.
 * @param {MouseEvent} event - The mouse event containing the initial position of the mouse.
 */
function startDrawing(event: MouseEvent){
  isDrawing = true;
  const {offsetX, offsetY} = event; 
  startX = offsetX;
  startY = offsetY;
  lastX = offsetX;
  lastY = offsetY;
}

/**
 * Stops the drawing operation on the canvas.
 * Updates the start and last coordinates of the mouse to the current position
 * when the mouse button is released, and sets the drawing flag to false.
 * @param {MouseEvent} event - The mouse event containing the current position of the mouse.
 */
function stopDrawing(event: MouseEvent){
  const {offsetX, offsetY} = event; 
  [startX, startY] = [offsetX, offsetY];
  [lastX, lastY] = [offsetX, offsetY];
  isDrawing = false;
}

/**
 * This function draws a line on the canvas when the mouse is being dragged.
 * It logs the previous and current position of the mouse.
 * @param {MouseEvent} event - The event object of the mousemove event.
 */
function draw(event: MouseEvent){
  if(isDrawing){
    const {offsetX, offsetY} = event;  
    canvasLines.beginPath();
    canvasLines.moveTo(lastX, lastY);
    canvasLines.lineTo(offsetX, offsetY);
    canvasLines.stroke();
    [lastX, lastY] = [offsetX, offsetY];
    console.log(lastX, lastY);
  }
}

/**
 * Given a MouseEvent, this function returns an object with the mouse x and y coordinates relative to the canvas element.
 * The coordinates are rounded to the nearest integer and can be used to draw on the canvas.
 * @param {MouseEvent} e
 * @returns {Object} An object with the x and y coordinates of the mouse relative to the canvas element.
 */
function getMousePosition(e: MouseEvent) {
  var mouseX = e.offsetX * canvas.width / canvas.clientWidth | 0;
  var mouseY = e.offsetY * canvas.height / canvas.clientHeight | 0;
  return {x: mouseX, y: mouseY};
}

/**
 * This function sets the canvas size based on the styles defined in the CSS
 * The canvas needs to have its internal size set to be able to draw on it
 */
function setCanvasSize(){
  const canvasStyle = getComputedStyle(canvas);
  const width = parseInt(canvasStyle.width);
  const height = parseInt(canvasStyle.height);
  // it is required to set the canvas internal size
  canvas.width = width;
  canvas.height = height;
}