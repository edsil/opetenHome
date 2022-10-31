"use strict";

window.onload = function () {
    cardsContainer = document.getElementById("contentBox");
    searchBox = document.getElementById("searchbox");
    btnConfirm = document.getElementById("confirm");
    windowWidth = window.innerWidth;
    addEvents();
loadCardsData();
};

//#region Global Variables
//DOM elements
var searchBox, btnConfirm, cardsContainer;
//Data holders
var cards = {};
var windowWidth;
//#endregion

function addEvents() {
    btnConfirm.onclick = searchAndDisplay;
    searchBox.oninput = searchAndDisplay;
    window.onresize = updateWindowWidth;
}

function updateWindowWidth() {
    windowWidth = window.innerWidth;
}

function searchAndDisplay() {
    dispCtn = 0;
    clearCardsContainer();
    var txt = searchBox.value.toLowerCase();
    var filtered = [];
    for (const [k, v] of Object.entries(cards)) {
        if (String(v.name).toLowerCase().includes(txt)) filtered.push(k);
    }
    displayTimed(filtered);
}


function displayTimed(keys) {
    let i = 0;
    while (dispCtn < keys.length) {
        let name = "./final_assets/final_" + keys[dispCtn] + ".png";
        addCard(name, cards[keys[dispCtn]]);
        dispCtn++;
        i++;
    }
}

function clearCardsContainer() {
    while (contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }
}

function addCard(fileName, card) {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.id = card.id;
    const cardName = document.createElement("p");
    cardName.className = "cardName";
    cardName.innerHTML = String(card.name);

    const cardPic = document.createElement("img");
    cardPic.className = "cardPic";

    newDiv.append(cardName);
    newDiv.append(cardPic);
    newDiv.onclick = clickCard;

    cardsContainer.appendChild(newDiv);
    return newDiv;
}

function clickCard(e) {
    e.currentTarget.className = e.currentTarget.className == "cardSelected" ? "card" : "cardSelected";
}

function loadCardsData() {
    const arrCards = [{id:1, name:"Links", link:"https://opeten.org/opeten/links"}];
    cards = [];
 var cardsKeys =[] ;
    Object.assign(cards, ...arrCards.map((f) => ({ [f.id]: f })));
    for (const [k, v] of Object.entries(cards)) {
        cardsKeys.push(k);
    }
displayTimed(cardsKeys);
}
