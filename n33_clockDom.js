'use strict'
const HOURS = 12; //digits on the dial
const ANGLE_TO_NEXT_DIGIT = 30;

var clockBoard = document.getElementById('clock');


(function (){
    //crate and set position to center of clock board
        var clockBoardCenter = document.createElement('div');
    clockBoardCenter.className += 'clockCenter';
    clockBoardCenter.style.position = 'absolute';
    clockBoardCenter.style.left = '150.5px';
    clockBoardCenter.style.top = '150.5px';
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
    var radius = 120;
    var _angle = 30;
    
    for (var i=1; i<=HOURS; i++) {
        var curNum = document.createElement('input');
        curNum.type = 'button'
        curNum.disabled = true;
        curNum.value = [i];
        curNum.className += 'num';
        curNum.style.width = '40px';
        curNum.style.height = '40px';
        var angle = _angle/180*Math.PI;
        var centCenterX = clockBoardCenter.offsetLeft+clockBoardCenter.offsetWidth/2;
        var centCenterY = clockBoardCenter.offsetTop+clockBoardCenter.offsetHeight/2;
        var numCenterX = centCenterX+radius*Math.sin(angle);
        var numCenterY = centCenterY-radius*Math.cos(angle);
        curNum.style.left = Math.round(numCenterX-parseInt(curNum.style.width)/2)+'px';
        curNum.style.top = Math.round(numCenterY-parseInt(curNum.style.height)/2)+'px';   
        _angle += ANGLE_TO_NEXT_DIGIT;
        clockBoard.appendChild(curNum);
    }
    //create and set position of dial
    var dial = document.createElement('span');
    dial.id = 'di';
    clockBoard.appendChild(dial);
    
    //update time functions
    var timer = 0;
    timer = setTimeout(updateTimeStopTimeout, 0);
    setInterval(updateTime, 1000);
    function updateTimeStopTimeout () {
        updateTime();
        if (timer !== 0) {
            clearTimeout(timer);
        }
    }
    function updateTime() {
        var curTime = new Date();
        var curTimeStr = formatDateTime(curTime);
        document.getElementById('di').innerHTML = curTimeStr;
    }    
    function formatDateTime(dt) {
        var hours=dt.getHours();
        var minutes=dt.getMinutes();
        var seconds=dt.getSeconds();
        
        function setPositions() {
            var hou = 0;
            hou = 0;
            var minAngle = 0;
            var houAngle = 0;
            
            function getHou (param) {
                switch(param) {
                    case 24:
                    hou = 12
                    break;
                    case 23:
                    hou = 11
                    break;
                    case 22:
                    hou = 10
                    break;
                    case 21:
                    hou = 9
                    break;
                    case 20:
                    hou = 8
                    break;
                    case 19:
                    hou = 7
                    break;
                    case 18:
                    hou = 6
                    break;
                    case 17:
                    hou = 5
                    break;
                    case 16:
                    hou = 4
                    break;
                    case 15:
                    hou = 3
                    break;
                    case 14:
                    hou = 2
                    break;
                    case 13:
                    hou = 1
                    break;
                    default:
                    hou = param;
                }
            }
            getHou(hours);
            
            function getMinHouAngle(paramSec, paramMin) {
                if (paramSec == 0) {
                    minAngle = minutes/60*360;
                } else {
                    minAngle = minutes/60*360+360/60*seconds/60;
                }
                if (paramMin == 0) {
                    houAngle = hou/12*360;
                } else {
                    houAngle = hou/12*360+360/12*minutes/60;
                }
            }
            getMinHouAngle(seconds, minutes);
            
            function secondGo() {
                secondLine.style.transform = 'translateY(-130px) translateX(-0.25px) rotate('+seconds/60*360+'deg)';
                minuteLine.style.transform =  'translateY(-105px) translateX(-1.25px) rotate('+ minAngle +'deg';
                hourLine.style.transform = 'translateY(-50px) translateX(-2px) rotate('+ houAngle +'deg)';
            }
            secondGo(seconds);
        }
        setPositions();
        function str0l(val,len) {
            var strVal=val.toString();
            while ( strVal.length < len )
            strVal='0'+strVal;
            return strVal;
        }
        clockBoard.style.opacity = '1';
        return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    }
})();