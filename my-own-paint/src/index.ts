import './styles.css'

const canvas = <HTMLCanvasElement>document.querySelector('#canvas')
const canvasLines = canvas.getContext('2d')
const paletteBtns = document.querySelectorAll('button')
const lineWidthInput = <HTMLInputElement>document.getElementById('stroke-width');

let isDrawing = false
let startX: number, startY: number
let lastX: number, lastY: number

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mouseup', stopDrawing)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseleave', stopDrawing)
// the default stroke color is black
let strokeColor = 'black'
let lineWidth = 1;
setCanvasSize()
/**
 * Listens for the window resize event and sets the canvas size when it is triggered.
 * It ensures that the canvas size is adjusted when the window is resized.
 * @listens window.resize
 */
window.addEventListener('resize', () => {
  setCanvasSize();
})

/**
 * Initiates the drawing operation on the canvas.
 * Sets the drawing flag to true and initializes the start and last coordinates
 * of the mouse to the position where the mouse button is pressed down.
 * @param {MouseEvent} event - The mouse event containing the initial position of the mouse.
 */
function startDrawing (event: MouseEvent) {
  isDrawing = true
  const { offsetX, offsetY } = event
  startX = offsetX
  startY = offsetY
  lastX = offsetX
  lastY = offsetY
}

/**
 * Stops the drawing operation on the canvas.
 * Updates the start and last coordinates of the mouse to the current position
 * when the mouse button is released, and sets the drawing flag to false.
 * @param {MouseEvent} event - The mouse event containing the current position of the mouse.
 */
function stopDrawing (event: MouseEvent) {
  const { offsetX, offsetY } = event;
  [startX, startY] = [offsetX, offsetY];
  [lastX, lastY] = [offsetX, offsetY]
  isDrawing = false
}

/**
 * This function draws a line on the canvas when the mouse is being dragged.
 * It logs the previous and current position of the mouse.
 * @param {MouseEvent} event - The event object of the mousemove event.
 */
function draw (event: MouseEvent) {
  if (isDrawing) {
    const { offsetX, offsetY } = event
    canvasLines.lineWidth = strokeWidth();
    canvasLines.strokeStyle = strokeColor
    canvasLines.beginPath()
    canvasLines.moveTo(lastX, lastY)
    canvasLines.lineTo(offsetX, offsetY)
    canvasLines.stroke();
    [lastX, lastY] = [offsetX, offsetY]
  }
}

/**
 * This function sets the canvas size based on the styles defined in the CSS
 * The canvas needs to have its internal size set to be able to draw on it
 */
function setCanvasSize () {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  // it is required to set the canvas internal size
  canvas.width = width
  canvas.height = height
}

/**
 * This function sets the line stroke color depending on the clicked button
 * If the eraser is clicked, it clears the canvas using setCanvasSize() to recalculate a new canvas
 * After clearing, the stroke color remains as the last one clicked
 */
paletteBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'trash') {
      setCanvasSize()
    } else if (button.id === 'eraser'){
      strokeColor = '#fafafa'
    }else{
      strokeColor = button.id
    }
  })
})

/**
 * Retrieves the stroke width value from the input element and updates the line width.
 * Converts the input string value to a number and returns it as the new line width.
 * @returns {number} The current stroke width value.
 */
function strokeWidth(){
  lineWidth = +lineWidthInput.value;
  return lineWidth
}