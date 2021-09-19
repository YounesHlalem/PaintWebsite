const clearButton = document.querySelector('.clear');
const strokeWeight = document.querySelector('.stroke-weight');
const colorPicker = document.querySelector('.color-picker');
const colorButton = document.querySelector('.colors');

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);
colorPicker.addEventListener('change', showColor);

function showColor() {
    colorButton.style.background = colorPicker.value;
}

function start(e) {
    isDrawing = true;
    draw(e);
}

function draw({ clientX: x, clientY: y }) {
    //e.clientX
    if (!isDrawing) return;

    context.lineWidth = strokeWeight.value;
    context.lineCap = "round";
    context.strokeStyle = colorPicker.value;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function stop() {
    isDrawing = false;
    context.beginPath();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();