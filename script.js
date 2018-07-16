'use strict'

let a = [];

for(let i = 0; i<100; i++) {
    a.push(i+1);
}

function f(arr, x) {
    console.log('+++')
}
document.body.addEventListener('mousedown', f)