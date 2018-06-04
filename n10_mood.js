"use strict";

function randomDiap(n,m) {
        return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    console.log( 'цветов: ' + colorsCount );
    var comp = {};
    for ( var i=1; i<=colorsCount; i++ ) {
        var n = randomDiap(1,7);
        while (n in comp) {
            n = randomDiap(1,7);
        }
        comp[n]=colors[n];
        console.log(comp[n]);
    }
}

mood(6);