'use strict';
var draggedElem = null;
var shiftX;
var shiftY;
let zI = 1;

window.addEventListener('load', positions);
document.body.addEventListener('mousedown', md);
document.body.addEventListener('mouseup', mu);

function positions() {
    var imgElems = document.getElementsByTagName('img');
    for (let i = imgElems.length-1; i>=0; i--) {
        let l = getCoords(imgElems[i]).left;
        let t = getCoords(imgElems[i]).top;
        imgElems[i].style.position = 'absolute';
        imgElems[i].style.left = l + 'px'; 
        imgElems[i].style.top = t + 'px';
    }
}
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }
}
function md(eo) {
    eo=eo||window.event;
    draggedElem = eo.target;
    shiftX = eo.clientX - getCoords(eo.target).left;
    shiftY = eo.clientY - getCoords(eo.target).top;
    eo.target.style.cursor = 'move';
    document.body.addEventListener('mousemove', mm);
}
function mm(eo) {
    eo=eo||window.event;
    eo.preventDefault();
    // console.log('move')
    if (draggedElem) {
        zI++;
        // eo.target.style.cursor = 'crosshair';
        draggedElem.style.zIndex = zI;
        draggedElem.style.left = eo.clientX - shiftX + 'px';
        draggedElem.style.top =  eo.clientY - shiftY + 'px';
    }
}
function mu(eo) {
    eo=eo||winow.event;
    eo.preventDefault();
    eo.target.style.cursor = 'initial';
    document.body.removeEventListener('mousemove', mm);
    draggedElem = null;
}