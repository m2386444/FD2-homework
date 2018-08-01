const HOURS = 12; //колличество делений на циферблате
const ANGLE_TO_NEXT_DIGIT = 30; //шаг в градусах(для третьего и последующих делений циферблата)
var _angle = 360/12; //начальный шаг в градусах(для второго деления)
var radius = 120; // радиус расположения делений на циферблате
var fs = 18; //высота текста часовых делений
let clockR = 150; //радиус циферблата

let cvs = document.getElementById('c1');
let ctx = cvs.getContext('2d');


ctx.fillStyle = 'rgb(192, 178, 151)';
ctx.beginPath();
ctx.arc(cvs.width/2, cvs.height/2, clockR, 0, Math.PI*2, false);
ctx.fill();

for (var i=1; i<=HOURS; i++) {
    var angle = _angle/180*Math.PI;
    var centerX = cvs.width/2;
    var centerY = cvs.height/2;
    ctx.beginPath();
    ctx.fillStyle = 'rgb(100, 225, 80)';
    ctx.arc(Math.round(centerX+radius*Math.sin(angle)), Math.round(centerY-radius*Math.cos(angle)), cvs.width/15, 0, Math.PI*2, false);
    ctx.fill();
    // var curNumText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    // curNumText.setAttribute('font-size', fs);
    // curNumText.setAttribute('textLength', curNum.r.baseVal.value);
    // curNumText.setAttribute('x', i > 9 ? Math.round(centerX+radius*Math.sin(angle)) - curNumText.textLength.baseVal.value/2 : Math.round(centerX+radius*Math.sin(angle)) - curNumText.textLength.baseVal.value/4);
    // curNumText.setAttribute('y', Math.round(centerY-radius*Math.cos(angle)) + fs/2.5);
    // curNumText.textContent = i;
    _angle += ANGLE_TO_NEXT_DIGIT;
    // clockBoard.appendChild(curNum);
    // clockBoard.appendChild(curNumText);
}