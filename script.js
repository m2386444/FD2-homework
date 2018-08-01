'use strict'
const HOURS = 12; //колличество делений на циферблате
const ANGLE_TO_NEXT_DIGIT = 30; //шаг в градусах(для третьего и последующих делений циферблата)
var _angle = 360/12; //начальный шаг в градусах(для второго деления)
var radius = 120; // радиус расположения делений на циферблате
var fs = 18; //высота текста часовых делений

(function (){
    var clockBoard = document.getElementById('clock');
    clockBoard.setAttribute('width', '300');
    clockBoard.setAttribute('height', '300');
    var circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circ.setAttribute('cx', '150')
    circ.setAttribute('cy', '150')
    circ.setAttribute('r', '150')
    circ.setAttribute('fill', 'rgb(192, 178, 151)')
    clockBoard.appendChild(circ);

    for (var i=1; i<=HOURS; i++) {
        var curNum = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        var angle = _angle/180*Math.PI;
        var centerX = clockBoard.width.baseVal.value/2;
        var centerY = clockBoard.height.baseVal.value/2;
        curNum.setAttribute('fill', 'rgb(100, 225, 80)');
        curNum.setAttribute('r', clockBoard.width.baseVal.value/15);
        curNum.setAttribute('cx', Math.round(centerX+radius*Math.sin(angle)));
        curNum.setAttribute('cy', Math.round(centerY-radius*Math.cos(angle)));
        var curNumText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        curNumText.setAttribute('font-size', fs);
        curNumText.setAttribute('textLength', curNum.r.baseVal.value);
        curNumText.setAttribute('x', i > 9 ? Math.round(centerX+radius*Math.sin(angle)) - curNumText.textLength.baseVal.value/2 : Math.round(centerX+radius*Math.sin(angle)) - curNumText.textLength.baseVal.value/4);
        curNumText.setAttribute('y', Math.round(centerY-radius*Math.cos(angle)) + fs/2.5);
        curNumText.textContent = i;
        _angle += ANGLE_TO_NEXT_DIGIT;
        clockBoard.appendChild(curNum);
        clockBoard.appendChild(curNumText);
    }
    
    var secondLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    secondLine.setAttribute('x1', '150')
    secondLine.setAttribute('y1', '150')
    secondLine.setAttribute('x2', '150')
    secondLine.setAttribute('y2', '25')
    secondLine.setAttribute('stroke', 'red')
    secondLine.setAttribute('stroke-width', '1')
    secondLine.setAttribute('transform-origin', '50%')
    secondLine.setAttribute('id', 'sL')
    clockBoard.appendChild(secondLine);
    var minuteLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    minuteLine.setAttribute('x1', '150px')
    minuteLine.setAttribute('y1', '150px')
    minuteLine.setAttribute('x2', '150px')
    minuteLine.setAttribute('y2', '45px')
    minuteLine.setAttribute('stroke', 'black')
    minuteLine.setAttribute('stroke-width', '3px')
    minuteLine.setAttribute('transform-origin', '50%')
    minuteLine.setAttribute('id', 'mL')
    clockBoard.appendChild(minuteLine);
    var hourLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hourLine.setAttribute('x1', '150px')
    hourLine.setAttribute('y1', '150px')
    hourLine.setAttribute('x2', '150px')
    hourLine.setAttribute('y2', '85px')
    hourLine.setAttribute('stroke', 'black')
    hourLine.setAttribute('stroke-width', '5px')
    hourLine.setAttribute('transform-origin', '50%')
    hourLine.setAttribute('id', 'hL')
    clockBoard.appendChild(hourLine);

    var secondLin = document.getElementById('sL');
    var minuteLin = document.getElementById('mL');
    var hourLin = document.getElementById('hL');
        
    updateTime();
    setInterval(updateTime, 1000);

    function updateTime() {
        var curTime = new Date();
        var curTimeStr = formatDateTime(curTime);
        function createDial (param) {
            if (!document.getElementById('di')) {
                var dial = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                dial.setAttribute('id', 'di');
                dial.setAttribute('x', clockBoard.width.baseVal.value/2.8)
                dial.setAttribute('y', clockBoard.height.baseVal.value/1.5)
                dial.textContent = param;
                clockBoard.appendChild(dial);
            } else {
                document.getElementById('di').textContent = param;
            }
        }
        createDial(curTimeStr);
    }    
    function formatDateTime(dt) {
        var hours=dt.getHours();
        var minutes=dt.getMinutes();
        var seconds=dt.getSeconds();
        function str0l(val,len) {
            var strVal=val.toString();
            while ( strVal.length < len )
            strVal='0'+strVal;
            return strVal;
        }
        function setPositions() {
            var minAngle = 0;
            var houAngle = 0;
            minAngle = minutes/60*360+360/60*seconds/60;
            houAngle = hours%12/12*360+360/12*minutes/60;
            secondLin.style.transform = 'rotate(' + seconds/60*360 + 'deg)';
            minuteLin.style.transform = 'rotate(' + minAngle + 'deg';
            hourLin.style.transform =  'rotate(' + houAngle + 'deg)';
        }
        setPositions();
        return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    }
})();