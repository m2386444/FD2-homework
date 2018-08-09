var but = document.createElement('button');
but.innerHTML = 'Старт!';
but.addEventListener('click', start);
document.body.appendChild(but);
var goals = document.createElement('span');
var leftPoints = 0;
var rightPoints = 0;
var timer = 0;
goals.style.margin = '0 0 0 50px';
goals.innerHTML = leftPoints + ' : ' + rightPoints;
document.body.appendChild(goals);

document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));

var area = document.createElement('div');
area.style.width = '650px';
area.style.height = '350px';
area.style.background = 'orange';
area.style.position = 'relative';
document.body.appendChild(area);

var leftRacket = document.createElement('div');
leftRacket.style.width = '10px';
leftRacket.style.height = '70px';
leftRacket.style.background = 'green';
leftRacket.style.borderRadius = '100%';
leftRacket.style.position = 'absolute';
leftRacket.style.left = '0';
leftRacket.style.top = parseInt(area.style.height)/2 - parseInt(leftRacket.style.height)/2 + 'px';
area.appendChild(leftRacket);

var rightRacket = document.createElement('div');
rightRacket.style.width = '10px';
rightRacket.style.height = '70px';
rightRacket.style.background = 'red';
rightRacket.style.borderRadius = '100%';
rightRacket.style.position = 'absolute';
rightRacket.style.left = parseInt(area.style.width) - parseInt(rightRacket.style.width) + 'px';
rightRacket.style.top = parseInt(area.style.height)/2 - parseInt(rightRacket.style.height)/2 + 'px';
area.appendChild(rightRacket);


var ballElem = document.createElement('div');
ballElem.style.width = '20px';
ballElem.style.height = '20px';
ballElem.style.position = 'absolute';
ballElem.style.background = 'blue';
ballElem.style.borderRadius = '50%';
area.appendChild(ballElem);

var areaH = {
    width: parseInt(area.style.width),
    height: parseInt(area.style.height)
}
var leftRacketH = {
    width: parseInt(leftRacket.style.width),
    height: parseInt(leftRacket.style.height),
    posY: parseInt(leftRacket.style.top),
    speedY: 0,
    go: function (param) {
        param == 'up' ? this.speedY = -10 : this.speedY = 10;
    },
    stop: function () {
        this.speedY = 0;
    },
    update: function () {
        leftRacket.style.top = this.posY + 'px';

    }
}
var rightRacketH = {
    width: parseInt(rightRacket.style.width),
    height: parseInt(rightRacket.style.height),
    posY: parseInt(rightRacket.style.top),
    speedY: 0,
    go: function (param) {
        var self = this;
        param == 'up' ? self.speedY = -10 : self.speedY = 10;
    },
    stop: function () {
        this.speedY = 0;
    },
    update: function () {
        rightRacket.style.top = this.posY + 'px';
    }
}

var ballH = {
    width: parseInt(ballElem.style.width),
    height: parseInt(ballElem.style.height),
    speedX: Math.random()*(7-(-7))+(-7),
    speedY: Math.random()*(10-(-10))+(-10),
    kick: 1.075,
    elast: 0.95,
    posX: parseInt(area.style.width)/2 - parseInt(ballElem.style.width)/2,
    posY: parseInt(area.style.height)/2 - parseInt(ballElem.style.height)/2,
    update: function () {
        ballElem.style.left = this.posX + 'px';
        ballElem.style.top = this.posY + 'px';
    }
}   
ballH.update();

function tick () {
//двигаем мячик
    ballH.posX += ballH.speedX;
    ballH.posY += ballH.speedY;
//двигаем ракетки
    leftRacketH.posY += leftRacketH.speedY
    rightRacketH.posY += rightRacketH.speedY
//если скорость мяча маленькая - устанавливаем побольше
    if (ballH.speedX<7 && ballH.speedX>0) {
        ballH.speedX = 7;
    }
    if (ballH.speedX<0 && ballH.speedX>-7) {
        ballH.speedX = -7;
    }
    if (ballH.speedY<2 && ballH.speedY>0) {
        ballH.speedY = 2;
    }
    if (ballH.speedY<0 && ballH.speedY>-2) {
        ballH.speedY = -2;
    }
//ограничиваем движение правой ракетки в пределах высоты арены
    if (rightRacketH.posY + rightRacketH.speedY < 0) {
        rightRacketH.posY = 0;
    }
    if (rightRacketH.posY + rightRacketH.height + rightRacketH.speedY > areaH.height) {
        rightRacketH.posY = areaH.height - rightRacketH.height;
    }
//ограничиваем движение левой ракетки в пределах высоты арены
    if (leftRacketH.posY + leftRacketH.speedY < 0) {
        leftRacketH.posY = 0;
    }
    if (leftRacketH.posY + leftRacketH.height + leftRacketH.speedY > areaH.height) {
        leftRacketH.posY = areaH.height - rightRacketH.height;
    }
//проверяем, отбила ли правая ракетка
    if (((ballH.posX + ballH.width) > (areaH.width - rightRacketH.width)) && ((ballH.posY+ballH.height/2) > rightRacketH.posY) && ((ballH.posY+ballH.height/2) < (rightRacketH.posY+rightRacketH.height))) {
        ballH.speedX = -ballH.speedX*ballH.kick; //ускоряем мячик
        ballH.speedY = rightRacketH.speedY/3; //меняем угол отскока мячика от ракетки
        ballH.posX = areaH.width - rightRacketH.width - ballH.width;
    }
//проверяем, отбила ли левая ракетка
    if ((ballH.posX < leftRacketH.width) && ((ballH.posY+ballH.height/2) > leftRacketH.posY) && ((ballH.posY+ballH.height/2) < (leftRacketH.posY+leftRacketH.height))) {
        ballH.speedX = -ballH.speedX*ballH.kick; //ускоряем мячик
        ballH.speedY = leftRacketH.speedY/3; //меняем угол отскока мячика от ракетки
        ballH.posX = leftRacketH.width;
    }
//проверяем на гол правой стороне
    if ((ballH.posX + ballH.width) > (areaH.width - rightRacketH.width)) {
        ballH.posX = areaH.width-ballH.width;
        clearInterval(timer);
        timer = 0;
        leftPoints++;
        goals.innerHTML = leftPoints + ' : ' + rightPoints;
    }
//проверяем на гол левой стороне
    if (ballH.posX < 0) {
        ballH.posX = 0;
        clearInterval(timer);
        timer = 0;
        rightPoints++;
        goals.innerHTML = leftPoints + ' : ' + rightPoints;
    }
//отскок мячика от низа
    if (ballH.posY+ballH.height > areaH.height) {
        ballH.speedX *= ballH.elast; //притормаживаем мячик
        ballH.speedY = -ballH.speedY;
        ballH.posY = areaH.height-ballH.height;
    }
//отскок мячика от верха
    if (ballH.posY < 0) {
        ballH.speedX *= ballH.elast; //притормаживаем мячик
        ballH.speedY = -ballH.speedY;
        ballH.posY = 0;
    }
    ballH.update();
    leftRacketH.update();
    rightRacketH.update();
}
function start () {
    if (timer) {
        clearInterval(timer);
        timer = 0;
    }
//если мячик не в центре - ставим его туда и запускаем в какую-то сторону
    if ((ballH.posX + ballH.width) > (areaH.width - rightRacketH.width) || ballH.posX <= 0) {
        ballH.posX = areaH.width/2-ballH.width/2;
        ballH.posY = areaH.height/2-ballH.height/2;
        ballH.speedX = Math.random()*(7-(-7))+(-7);
//увеличиваем скорость мячика, если нужно
        if (ballH.speedX<4 && ballH.speedX>0) {
            ballH.speedX = 4;
        }
        if (ballH.speedX<0 && ballH.speedX>-4) {
            ballH.speedX = -4;
        }
        ballH.speedY = Math.random()*(5-(-5))+(-5);
        if (ballH.speedY<4 && ballH.speedY>0) {
            ballH.speedY = 4;
        }
        if (ballH.speedY<0 && ballH.speedY>-4) {
            ballH.speedY = -4;
        }
    }
    timer = setInterval(tick, 40);
}
//ускоряем соответствующую ракетку по keydown
document.onkeydown = function (eo) {
    eo=eo||window.event;
    switch (eo.keyCode) {
        case 16:
        leftRacketH.go('up');
        break;
        case 17:
        leftRacketH.go('down');
        break;
        case 38:
        rightRacketH.go('up');
        break;
        case 40:
        rightRacketH.go('down');
        break;
    }
}
//останавливаем соответствующую ракетку по keyup
document.onkeyup = function (eo) {
    eo=eo||window.event;
    if (eo.keyCode == 16 || eo.keyCode == 17) {
        leftRacketH.stop();
    }
    if (eo.keyCode == 38 || eo.keyCode == 40) {
        rightRacketH.stop();
    }
}
