// Variable declarations 
let xp = 0
let health = 100;
let gold = 50; 
let currentWeapon = 1;
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


// Weapons and inflict-damage
const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];


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
    },
    {
        name: "cave",
        button_text: ["Fight slime", "Fight fanged beast", "Go to town square"],
        button_function: [fightSlime, fightBeast, goTown],
        message_text: "You're in the cave and see some monsters."
    }
];


// Player starting location: town sqaure
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


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
function goTown() { update(locations[0]); }

function goStore() { update(locations[1]); }

function goCave() { update(locations[2]); }


// Store purchases
function buyHealth()
{
    if(gold >= 10)
    {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else
    {
        message.innerText = "Insufficient amount of gold";
    }
}

function buyWeapon()
{
    if(currentWeapon < weapons.length)
    {
        if(gold >= 30)
        {
            gold -= 30;
            goldText.innerText = gold;
            let newWeapon = weapons[++currentWeapon].name;
            inventory.push(newWeapon);
            message.innerText = "You have acquired the " + newWeapon + ".";
            message.innerText += "Inventory: " + inventory;  
        }
        else
        {
            message.innerText = "Insufficient gold.";
        }
    }
    else
    {
        message.innerText = "You alreayd have the most powerful weapon";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon()
{
    if(inventory.length > 1)
    {
        gold += 15;
        goldText.innerText = gold;
        let weaponForSale = inventory.shift();
        message.innerText = "You sold a " + weaponForSale;
        message.innerText = "Inventory: " + inventory;
    }
    else
    {
        message.innerText = "Don't sell your only weapon!" 
    }

}

// to-be implemented
function fightBeast(){

}
function fightSlime(){

}
function fightDragon()
{
    console.log("Fighting dragon");
}

