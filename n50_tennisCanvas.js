'use strict'
var cvs = document.getElementById('c1');
var ctx = cvs.getContext('2d');
var leftPoints = 0;
var rightPoints = 0;
var gameStage = 0;
var goals = document.getElementById('g');
goals.innerHTML = leftPoints + ' : ' + rightPoints;
var but = document.getElementById('b');
but.addEventListener('click', start);
var areaH = {
    width: cvs.width,
    height: cvs.height
}
var ballH = {
    posX: areaH.width/2,
    posY: areaH.height/2,
    r: 10,
    speedX: Math.random()*(7-(-7))+(-7),
    speedY: Math.random()*(5-(-5))+(-5),
    kick: 1.01,
    elast: 0.95,
    spin: 0
}
var leftRacketH = {
    width: areaH.width/75,
    height: areaH.height/3.2,
    posY: areaH.height/2,
    speedY: 0,
    go: function (param) {
            var self = this;
            if (param == true) {
                if ((self.posY-self.height/2)>0) {
                    if (!self.speedY) {
                        self.speedY = -10;
                    }
                }
            } else {
                if (self.posY < (areaH.height - leftRacketH.height/2)) {
                    if (!self.speedY) {
                        self.speedY = 10;
                    }
                }
            }
        },
    stop: function () {
            this.speedY = 0;
        },
    update: function () {
            leftRacket.y1.baseVal.value += this.speedY;
            leftRacket.y2.baseVal.value += this.speedY;
        }
}
var rightRacketH = {
    width: areaH.width/75,
    height: areaH.height/3.2,
    posY: areaH.height/2,
    speedY: 0,
    go: function (param) {
            var self = this;
            if (param == true) {
                if (self.posY-self.height/2>0) {
                    if (!self.speedY) {
                        self.speedY = -10;
                    }
                }
            } else {
                if (self.posY < (areaH.height - rightRacketH.height/2)) {
                    if (!self.speedY) {
                        self.speedY = 10;
                    }
                }
            }
        },
    stop: function () {
        var self = this;
        self.speedY = 0;
        },
    update: function () {
        this.posY += this.speedY;
        }
}
//создаем звуки
var racket1Sound = new Audio('racket1.ogg');
var racket2Sound = new Audio('racket2.ogg');
var wallSound = new Audio('wall.ogg');
var whistSound = new Audio('whistSound.mp3');
var shortWhistSound = new Audio('shortWhistSound.mp3');

function racket1SoundInit () {
    racket1Sound.play();
    racket1Sound.pause();
}
function racket1SoundPlay () {
    racket1Sound.currentTime=0;
    racket1Sound.play();
}
function racket2SoundInit () {
    racket2Sound.play();
    racket2Sound.pause();
}
function racket2SoundPlay () {
    racket2Sound.currentTime=0;
    racket2Sound.play();
}
function wallSoundInit () {
    wallSound.play();
    wallSound.pause();
}
function wallSoundPlay () {
    wallSound.currentTime=0;
    wallSound.play();
}
// function whistSoundInit () {
//     whistSound.play();
//     whistSound.pause();
// }
function whistSoundPlay () {
    whistSound.currentTime=0;
    whistSound.play();
}
// function shortWhistSoundInit () {
//     shortWhistSound.play();
//     shortWhistSound.pause();
// }
function shortWhistSoundPlay () {
    shortWhistSound.currentTime=0;
    shortWhistSound.play();
}
function tick () {
    ballH.posX += ballH.speedX;
    ballH.posY += ballH.speedY;
    ballH.speedY += ballH.spin;
    leftRacketH.posY += leftRacketH.speedY;
    leftRacketH.speedY *= 1.03; //ускоряем ракетку
    rightRacketH.posY += rightRacketH.speedY;
    rightRacketH.speedY *= 1.03; //ускоряем ракетку
    //если скорость мяча маленькая - устанавливаем побольше    
    if (ballH.speedX<5 && ballH.speedX>0) {
        ballH.speedX = 5;
    }
    if (ballH.speedX<0 && ballH.speedX>-5) {
        ballH.speedX = -5;
    }
    if (ballH.speedY<2 && ballH.speedY>0) {
        ballH.speedY = 2;
    }
    if (ballH.speedY<0 && ballH.speedY>-2) {
        ballH.speedY = -2;
    }
    //ограничиваем движение правой ракетки в пределах высоты арены
    if (rightRacketH.posY-rightRacketH.height/2 + rightRacketH.speedY < 0) {
        rightRacketH.posY = rightRacketH.height/2;
        rightRacketH.speedY = 0;
    }
    if (rightRacketH.posY + rightRacketH.height/2 + rightRacketH.speedY > areaH.height) {
        rightRacketH.posY = areaH.height - rightRacketH.height/2;
        rightRacketH.speedY = 0;
    }
    //ограничиваем движение левой ракетки в пределах высоты арены
    if (leftRacketH.posY-leftRacketH.height/2 + leftRacketH.speedY < 0) {
        leftRacketH.posY = leftRacketH.height/2;
        leftRacketH.speedY = 0;
    }
    if (leftRacketH.posY + leftRacketH.height/2 + leftRacketH.speedY > areaH.height) {
        leftRacketH.posY = areaH.height - leftRacketH.height/2;
        leftRacketH.speedY = 0;
    }
    //проверяем, отбила ли правая ракетка
    if (((ballH.posX + ballH.r) > (areaH.width - rightRacketH.width)) && ((ballH.posY) > rightRacketH.posY-rightRacketH.height/2) && ((ballH.posY) < (rightRacketH.posY+rightRacketH.height/2))) {
        racket1SoundPlay();
        ballH.speedX = -ballH.speedX*ballH.kick; //ускоряем мячик ударом
        ballH.speedY += rightRacketH.speedY/10; //меняем угол отскока мячика от ракетки
        ballH.spin = -rightRacketH.speedY/300; //крутим мячик
        ballH.posX = areaH.width - rightRacketH.width - ballH.r;
    }
    //проверяем, отбила ли левая ракетка
    if ((ballH.posX-ballH.r < leftRacketH.width) && ((ballH.posY) > leftRacketH.posY-leftRacketH.height/2) && ((ballH.posY) < (leftRacketH.posY+leftRacketH.height/2))) {
        racket2SoundPlay();
        ballH.speedX = -ballH.speedX*ballH.kick; //ускоряем мячик ударом
        ballH.speedY += leftRacketH.speedY/10; //меняем угол отскока мячика от ракетки
        ballH.spin = -leftRacketH.speedY/300; //крутим мячик
        ballH.posX = leftRacketH.width+ballH.r;
    }
    //проверяем на гол правой стороне
    if ((ballH.posX + ballH.r) > (areaH.width - rightRacketH.width)) {
        ballH.speedY = 0;
        ballH.speedX = 0;
        ballH.spin = 0;
        ballH.posX = areaH.width-ballH.r;
        if (gameStage != 2)
        leftPoints++;
        gameStage = 2;
        whistSoundPlay();
        goals.innerHTML = leftPoints + ' : ' + rightPoints;
    }
    //проверяем на гол левой стороне
    if (ballH.posX-ballH.r < 0) {
        ballH.speedY = 0;
        ballH.speedX = 0;
        ballH.spin = 0;
        ballH.posX = ballH.r;
        if (gameStage != 2)
        rightPoints++;
        gameStage = 2;
        whistSoundPlay();
        goals.innerHTML = leftPoints + ' : ' + rightPoints;
    }
    //отскок мячика от низа
    if (ballH.posY+ballH.r > areaH.height) {
        wallSoundPlay();
        ballH.speedX *= ballH.elast; //притормаживаем мячик
        ballH.speedY = -ballH.speedY;
        ballH.posY = areaH.height-ballH.r;
        }
        //отскок мячика от верха
    if (ballH.posY-ballH.r < 0) {
        wallSoundPlay();
        ballH.speedX *= ballH.elast; //притормаживаем мячик
        ballH.speedY = -ballH.speedY;
        ballH.posY = ballH.r;
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, areaH.width, areaH.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, leftRacketH.posY-leftRacketH.height/2, leftRacketH.width, leftRacketH.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(areaH.width-rightRacketH.width, rightRacketH.posY-rightRacketH.height/2, rightRacketH.width, rightRacketH.height);
    
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(ballH.posX, ballH.posY, ballH.r, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    if (gameStage == 1)
    requestAnimationFrame(tick);
}
tick();
function start () {
    //если игра сейчас не идёт - запускаем
    if (gameStage != 1) {
        ballH.posX = areaH.width/2;
        ballH.posY = areaH.height/2;
        ballH.speedX = Math.random()*(7-(-7))+(-7);
        ballH.speedY = Math.random()*(5-(-5))+(-5);
        gameStage = 1;
        // whistSoundInit();
        // shortWhistSoundInit();
        // racket1SoundInit();
        // racket2SoundInit();
        // wallSoundInit();
        shortWhistSoundPlay();
        requestAnimationFrame(tick);
    }
}
//ускоряем соответствующую ракетку по keydown
document.onkeydown = function (eo) {
    eo=eo||window.event;
switch (eo.keyCode) {
        case 16:
        leftRacketH.go(true);
        break;
        case 17:
        leftRacketH.go(false);
        break;
        case 38:
        rightRacketH.go(true);
        break;
        case 40:
        rightRacketH.go(false);
        break;
        case 32:
        start();
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