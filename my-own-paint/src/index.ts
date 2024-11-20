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

function startDrawing(event: MouseEvent){
  // I want to detect the initial coordinates when clicking the mouse
  isDrawing = true;
  const {offsetX, offsetY} = event;
  startX = offsetX;
  startY = offsetY;
  lastX = offsetX;
  lastY = offsetY;
}

function stopDrawing(event: MouseEvent){
  const {offsetX, offsetY} = event; 
  [startX, startY] = [offsetX, offsetY];
  [lastX, lastY] = [offsetX, offsetY];
  isDrawing = false;
}

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