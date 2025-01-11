// Variable declarations
let health = 100;
let monsterHealth = 100;
let gold = 50;
let weapons = ["bow & arrow"];
let weaponDamage = 15;
const enemyDamage = 10;


// HTML elements selection 
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const message = document.querySelector("#text");
const healthText = document.querySelector("#health");
const goldText = document.querySelector("#goldText");
const monsterStatsText = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const seller = document.querySelector("#seller");
const healthPack = document.querySelector("#healthpack");
const upgrader = document.querySelector("#upgrader");
const upgrade1 = document.querySelector("#upgrade1");
const conv1 = document.querySelector("#conv1");
const next = document.querySelector("#next");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const dragon = document.querySelector("#dragon");




button1.onclick = goStore;
button2.onclick = goFight;
next.onclick = showPrices; 

function goFight()
{
    dragon.style.display = "inline";
    document.body.style.backgroundImage = "url(./images/dungeon.jpg)";
}

function upgradeWeapon()
{
    gold -= 30;
    goldText.innerText = gold;
    message.innerText = "\n\n\nGold exchanged!\n\nSword upgraded to Level 2!\n\n";
    upgrade1.style.display = "none";
    arrow2.style.bottom = "650px"; 
    arrow2.style.left = "180px"; 
    arrow2.style.height = "115px";
    arrow2.style.transform = "rotate(-50deg)";
    conv1.style.display = "none";


}

function goStore()
{
    document.body.style.backgroundImage = "url(./images/store.jpg)";
    document.body.style.backgroundSize = "1320px";
    document.body.style.backgroundPositionY = "-8%";
    document.body.style.backgroundPositionX = "230%";
    dragon.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    seller.style.display = "inline";
    healthPack.style.display = "block";
    upgrader.style.display = "block";
    conv1.style.display = "block";
    next.style.display = "inline";
    next.style.animation = "disappear 8s";
    message.innerText = "\n This is the village store.\n\nHere, you can recover your health \nand upgrade your sword. \n\nBut remember . . .  paradise comes at a cost.";
}

function showPrices()
{   
    next.style.display = "none";
    arrow2.style.display = "inline";
    message.innerText = "\n\n\nUpgrade your weapon!\n\nYou have 50 gold!"
    upgrade1.style.display = "inline";
    upgrade1.onclick = upgradeWeapon;
    
}








