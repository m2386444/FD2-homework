'use strict';
var draggedElem = null;
var shiftX;
var shiftY;
window.addEventListener('load', positions);
document.body.addEventListener('dragstart', dragStart);
document.body.addEventListener('dragend', dragEnd);
document.body.addEventListener('dragover', dragOver);
document.body.addEventListener('drop', contDrop);

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
function dragStart(eo) {
    eo=eo||window.event;
    draggedElem = eo.target;
    shiftX = eo.clientX - getCoords(eo.target).left;
    shiftY = eo.clientY - getCoords(eo.target).top;
    eo.target.style.opacity = '0';  
}
function dragEnd(eo) {
    eo=eo||window.event;
    draggedElem = null;
}
function contDrop(eo) {
    eo=eo||window.event;
    eo.preventDefault();
    if (draggedElem) {
        eo.currentTarget.appendChild(draggedElem);
        draggedElem.style.position = 'absolute';
        draggedElem.style.left = eo.clientX - shiftX + 'px';
        draggedElem.style.top =  eo.clientY - shiftY + 'px';
        draggedElem.style.opacity = '1';
    }
}
function dragOver(eo) {
    eo=eo||winow.event;
    eo.preventDefault();
}
function dragging(eo) {
    eo=eo||window.event;
    console.log('+++move+++');
}