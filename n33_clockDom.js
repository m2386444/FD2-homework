'use strict'
const HOURS = 12; //digits on the dial

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
        
        _angle += 30;

        clockBoard.appendChild(curNum);
    }

    //create and set position to dial
    var dial = document.createElement('span');
    dial.id = 'di';

    clockBoard.appendChild(dial);

    setInterval(updateTime, 1000);
    // updateTime();
    
    function updateTime() {
        var curTime = new Date();
        var curTimeStr = formatDateTime(curTime);
        document.getElementById('di').innerHTML = curTimeStr;
    }
    function formatDateTime(dt) {
        var hours=dt.getHours();
        var minutes=dt.getMinutes();
        var seconds=dt.getSeconds();
        var sec = 0;
        var min = 0;
        var minDop = 0;
        function getMinDop(param) {
            if (param == 0) {
                minDop = 0
                console.log(minDop)
            } else {
                minDop = (param*0.1).toFixed(1);
                console.log(minDop)
            }
        }
        var hou = 0;
        sec = seconds;
        min = minutes;
        hou = 0;
        getHou(hours);
        getMinDop(sec);
        secondGo(sec);
        function secondGo() {
            secondLine.style.transform = 'translateY(-130px) translateX(-0.25px) rotate('+360/60*sec+'deg)';
            minuteLine.style.transform =  'translateY(-105px) translateX(-1.25px) rotate('+360/60*min+'deg';
            hourLine.style.transform = 'translateY(-50px) translateX(-2px) rotate('+360/12*hou+'deg)';
        }
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
        return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    }
    function str0l(val,len) {
        var strVal=val.toString();
        while ( strVal.length < len )
            strVal='0'+strVal;
        return strVal;
    }
})();





