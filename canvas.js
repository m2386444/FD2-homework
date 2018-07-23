'use strict'

let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'red'; /* set red as color to all next fills */
ctx.fillRect(100, 50, 150, 75); /* create fill rect */
ctx.fillStyle = 'blue'; /* set blue as color to all next fills */
ctx.fillRect(150, 100, 100, 50);
ctx.clearRect(0, 0, 400, 200); /* clear canvas in this coords */

ctx.strokeStyle = 'green'; /* set color of line */
ctx.lineWidth = '10'; /* set width of line */
ctx.rect(50, 10, 100, 100); /* set pen to this place */
ctx.rect(200, 10, 100, 100); /* set pen to this place */
ctx.stroke(); /* create transparent rect, filling - last color of fillStyle */
ctx.fillStyle = 'orange';
ctx.fill(); /* fill all transparent rects */
ctx.clearRect(0, 0, 400, 200);


// ctx.fillRect(x, y, width, height);