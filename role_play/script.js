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
const goldText = document.querySelector("#gold");
const monsterStatsText = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const seller = document.querySelector("#seller");


button1.onclick = goStore;

function goStore()
{
    document.body.style.backgroundImage = "url(./images/store.jpg)";
    document.body.style.backgroundSize = "1320px";
    document.body.style.backgroundPositionY = "-8%";
    document.body.style.backgroundPositionX = "230%";



    seller.style.display = "inline";
    hero.style.marginLeft = "0%";


}




