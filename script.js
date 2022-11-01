"use strict";

window.onload = function () {
    windowWidth = window.innerWidth;
    addEvents();
};
var windowWidth;

function addEvents() {
    window.onresize = updateWindowWidth;
}

function updateWindowWidth() {
    windowWidth = window.innerWidth;
}
