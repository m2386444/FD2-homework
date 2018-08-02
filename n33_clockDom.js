'use strict'
const HOURS = 12; //digits on the dial
var clockBoard = document.getElementById('clock');

(function (){
    //crate and set position to center of clock board
        var clockBoardCenter = document.createElement('div');
    clockBoardCenter.className += 'clockCenter';
    clockBoardCenter.style.position = 'absolute';
    clockBoardCenter.style.left = clockBoard.offsetWidth/2 + 'px';
    clockBoardCenter.style.top = clockBoard.offsetHeight/2 + 'px';
    clockBoard.appendChild(clockBoardCenter);
    
    //crate and set position to hour hands
        var hourLine = document.createElement('input');
    hourLine.type = 'button';
    hourLine.disabled = true;
    hourLine.className += 'lin hourLin';
    clockBoardCenter.appendChild(hourLine);
    var minuteLine = document.createElement('input');
    minuteLine.type = 'button'
    minuteLine.disabled = true;
    minuteLine.className += 'lin minuteLin';
    clockBoardCenter.appendChild(minuteLine);
    var secondLine = document.createElement('input');
    secondLine.type = 'button'
    secondLine.disabled = true;
    secondLine.className += 'lin secondLin secondTransform';
    clockBoardCenter.appendChild(secondLine);
    
    //create and set position to digits of the dial
    var radius = clockBoard.offsetHeight/2.5;
    var _angle = 360/12;
    for (var i=1; i<=HOURS; i++) {
        var curNum = document.createElement('input');
        curNum.type = 'button'
        curNum.disabled = true;
        curNum.value = [i];
        curNum.className += 'num';
        curNum.style.width = clockBoard.offsetWidth/7 + 'px';
        curNum.style.height = clockBoard.offsetHeight/7 + 'px';
        var angle = _angle*i/180*Math.PI;
        var centCenterX = clockBoardCenter.offsetLeft+clockBoardCenter.offsetWidth/2;
        var centCenterY = clockBoardCenter.offsetTop+clockBoardCenter.offsetHeight/2;
        var numCenterX = centCenterX+radius*Math.sin(angle);
        var numCenterY = centCenterY-radius*Math.cos(angle);
        curNum.style.left = Math.round(numCenterX-parseInt(curNum.style.width)/2)+'px';
        curNum.style.top = Math.round(numCenterY-parseInt(curNum.style.height)/2)+'px';   
        clockBoard.appendChild(curNum);
    }
    //create and set position of dial
    var dial = document.createElement('span');
    dial.id = 'di';
    clockBoard.appendChild(dial);
    
    //update time functions
    updateTime();
    
    setInterval(updateTime, 1000);
    function updateTime() {
        var curTime = new Date();
        var curTimeStr = formatDateTime(curTime);
        document.getElementById('di').innerHTML = curTimeStr;
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
            secondLine.style.transform = 'translateY(' + (-secondLine.offsetHeight) + 'px)' + 'translateX(' + (-secondLine.offsetWidth/2) + 'px)' + 'rotate(' + seconds/60*360 + 'deg)';
            minuteLine.style.transform = 'translateY(' + (-minuteLine.offsetHeight) + 'px)' + 'translateX(' + (-minuteLine.offsetWidth/2) + 'px)' + 'rotate(' + minAngle + 'deg';
            hourLine.style.transform = 'translateY(' + (-hourLine.offsetHeight) + 'px)' + 'translateX(' + (-hourLine.offsetWidth/2) + 'px)' + 'rotate(' + houAngle + 'deg)';
        }
        setPositions();
        return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    }
})();