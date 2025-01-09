// Variable declarations 
let xp = 0
let health = 100;
let gold = 50; 
let currentWeapon = 0;
let inventory = ["stick"];
let fighting;
let monsterHealth;

// HTML elements selection 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const message = document.querySelector("#text");
const xpText = document.querySelector("#xp");
const healthText = document.querySelector("#health");
const goldText = document.querySelector("#gold");
const monsterStatsText = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// Player starting location: town sqaure
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// UI displays based on player location
const locations = [
    {
        name: "town square",
        button_text: ["Go to store", "Go to cave", "Fight dragon"],
        button_function: [goStore, goCave, fightDragon],
        message_text: "You are currently in the town. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        button_text: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        button_function: [buyHealth, buyWeapon, goTown],
        message_text: "You are currently in the store"
    }
];

// Update UI based on location
function update(location)
{
    message.innerText = location.message_text;

    button1.innerText = location.button_text[0];
    button2.innerText = location.button_text[1];
    button3.innerText = location.button_text[2];

    button1.onclick = location.button_function[0];
    button2.onclick = location.button_function[1];
    button3.onclick = location.button_function[2];

}

// functions to change locations
function goTown()
{
    update(locations[0]);
}

function goStore()
{
    update(locations[1]);
}



// to-be implemented
function buyHealth()
{

}
function buyWeapon()
{

}

function goCave()
{
    console.log("Going to cave");
}

function fightDragon()
{
    console.log("Fighting dragon");
}

