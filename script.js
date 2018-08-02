const HOURS = 12; //колличество делений на циферблате
let _angle = 360/12; //начальный шаг в градусах(для второго деления)
let radius = 120; // радиус расположения делений на циферблате
let fs = 18; //высота текста часовых делений
let clockR = 150; //радиус циферблата


function go () {
    let cvs = document.getElementById('c1');
    let ctx = cvs.getContext('2d');
    let centerX = cvs.width/2;
    let centerY = cvs.height/2;
    ctx.fillStyle = 'rgb(192, 178, 151)';
    ctx.beginPath();
    ctx.arc(cvs.width/2, cvs.height/2, clockR, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    
    
    for (var i=1; i<=HOURS; i++) {
        var angle = _angle*i/180*Math.PI;
        ctx.beginPath();
        ctx.fillStyle = 'rgb(100, 225, 80)';
        ctx.arc(Math.round(centerX+radius*Math.sin(angle)), Math.round(centerY-radius*Math.cos(angle)), cvs.width/15, 0, Math.PI*2, false);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.font = 'normal 20px Arial';
        ctx.fillText(i, Math.round(centerX+radius*Math.sin(angle)) - (i>9?cvs.width/15/2:cvs.width/15/3.5), Math.round(centerY-radius*Math.cos(angle))+cvs.height/15/3);
    }
    
    function updateTime() {
        var curTime = new Date();
        var curTimeStr = formatDateTime(curTime);
        function createDial (param) {
            ctx.fillStyle = 'black';
            ctx.font = 'normal 20px Arial';
            ctx.fillText(param, cvs.width/2.7, cvs.height/1.3);
        }
        createDial(curTimeStr);
    }
    function formatDateTime(dt) {
        var hours=dt.getHours();
        var minutes=dt.getMinutes();
        var seconds=dt.getSeconds();
        function setPositions() {
            var minAng = minutes/60*360+360/60*seconds/60;
            var houAng = hours%12/12*360+360/12*minutes/60;
            let secondAng = 360/60/180*Math.PI*seconds;
            console.log(secondAng);
            let minuteAng = 360/60/180*Math.PI*minutes+360/60/60/180*Math.PI*seconds;
            console.log(minuteAng);
            let hourAng = 360/12/180*Math.PI*hours+360/12/60/180*Math.PI*minutes;
            console.log(hourAng);
            let secondR = centerY - 30;
            let minuteR = centerY - 60;
            let hourR = centerY - 100;
            
            let secondX2 = centerX;
            let secondY2 = 30;
            let minuteX2 = centerX;
            let minuteY2 = 60;
            let hourX2 = centerX;
            let hourY2 = 100;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(Math.round(centerX+secondR*Math.sin(secondAng)), Math.round(centerY-secondR*Math.cos(secondAng)));
            ctx.strokeStyle = 'red';
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.closePath();
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(Math.round(centerX+minuteR*Math.sin(minuteAng)), Math.round(centerY-minuteR*Math.cos(minuteAng)));
            ctx.strokeStyle = 'black';
            ctx.lineCap = 'round';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(Math.round(centerX+hourR*Math.sin(hourAng)), Math.round(centerY-hourR*Math.cos(hourAng)));
            ctx.strokeStyle = 'black';
            ctx.lineCap = 'round';
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;
        }
        setPositions();
        function str0l(val,len) {
            var strVal=val.toString();
            while ( strVal.length < len )
            strVal='0'+strVal;
            return strVal;
        }
        return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    }
    updateTime();
}
go();
setInterval(go, 1000);

