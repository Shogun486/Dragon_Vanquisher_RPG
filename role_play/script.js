
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
const attack_button = document.querySelector("#attack_btn");
const visit_button1 = document.querySelector("#visit_btn1");
const visit_button2 = document.querySelector("#visit_btn2");
const message = document.querySelector("#text");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStatsText = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const seller = document.querySelector("#seller");
const healthPack = document.querySelector("#healthpack");
const upgrader = document.querySelector("#upgrader");
const upgrade1 = document.querySelector("#upgrade1");
const conv1 = document.querySelector("#conv1");
const conv2 = document.querySelector("#conv2");
const conv3 = document.querySelector("#conv3");
const conv4 = document.querySelector("#conv4");
const conv5 = document.querySelector("#conv5");
const next = document.querySelector("#next");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const dragon = document.querySelector("#dragon");
const minion1 = document.querySelector("#minion1");
const minion2 = document.querySelector("#minion2");
const fireball = document.querySelector("#fireball");
const sword = document.querySelector("#sword");
const upgrade_health = document.querySelector("#upgrade_health");
const rip = document.querySelector("#rip");


// Starting screen
button1.onclick = goStore;
button2.onclick = playScene;
let ctr = 0;


// Initial encounter with dragon
function playScene()
{
    document.body.style.backgroundImage = "url(./images/dungeon.jpg)";
    button2.style.display = "none";
    if(ctr == 0)
    {
        next.style.display = "inline";
        next.style.animation = "fade 4s";
    }

    hero.style.left = "200px";
    hero.style.top = "500px";
    hero.style.width = "330px";
    dragon.style.display = "inline";
    dragon.style.right = "50px";
    dragon.style.top = "200px";
    conv2.style.display = "inline";
    message.innerText = "\nThe dragon has spoken. \n\nYou must show no fear. \n\nThe village is counting on you.";

    next.onclick = () => 
    {
        if(ctr === 0)
        {
            next.style.animation = "fade infinite 1.5s";
            conv2.style.display = "none";
            conv3.style.display = "inline";
            conv3.style.left = "250px";
            conv3.style.bottom = "280px";
            ctr++;
        }
        else if (ctr === 1)
        {
            fireball.style.display = "inline";
            conv2.style.display = "none";
            conv3.style.display = "none";
            message.innerText = "\nYou've taken damage. \n\nYou must retreat!\n\n Visit the store to regain your health!";
            health -= 60;
            healthText.innerText = health;
            arrow2.style.display = "inline";
            arrow2.style.bottom = "700px"; 
            arrow2.style.left = "180px"; 
            arrow2.style.height = "60px";
            arrow2.style.transform = "rotate(-135deg)";
            button1.style.display = "inline";
            next.style.display = "none";
            ctr++;
        }    
    }
}


// Store scene with seller
function goStore()
{
    document.body.style.backgroundImage = "url(./images/store.jpg)";
    document.body.style.backgroundSize = "1320px";
    document.body.style.backgroundPositionY = "-8%";
    document.body.style.backgroundPositionX = "230%";
    dragon.style.display = "none";
    fireball.style.display = "none";
    hero.style.width = "300px";
    hero.style.left = "500px";
    hero.style.top = "18px";
    arrow2.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    seller.style.display = "inline";
    healthPack.style.display = "block";
    upgrader.style.display = "block";
    conv1.style.display = "block";
    next.onclick = setUpStore; 
    next.style.display = "inline";
    next.style.animation = "fade 8s";
    message.innerText = "\n This is the village store.\n\nHere, you can recover your health \nand upgrade your sword. \n\nBut remember . . .  paradise comes at a cost.";
}


// Store scene helper function
function setUpStore()
{   
    next.style.display = "none";
    message.innerText = "\n\n\nUpgrade your weapon!\n\nYou have enough gold!"
    upgrade1.style.display = "inline";
    arrow2.style.display = "inline";
    arrow2.style.bottom = "650px"; 
    arrow2.style.left = "180px"; 
    arrow2.style.height = "115px";
    arrow2.style.transform = "rotate(-50deg)";

    arrow1.style.display = "inline";
    arrow1.style.bottom = "100px"; 
    arrow1.style.left = "800px"; 
    arrow1.style.height = "160px";
    arrow1.style.transform = "rotate(-50deg)";

    upgrade1.onclick = () => 
    {
        gold -= 30;
        goldText.innerText = gold;
        message.innerText = "\nGold exchanged!\n\nSword upgraded!\n\nNow regain your health.";
        upgrade1.style.display = "none";
        conv1.style.display = "none";
        arrow2.style.display = "none";
        arrow1.style.left = "535px";
        arrow1.style.bottom = "175px";
        upgrade_health.style.display = "inline";
        upgrade_health.onclick = () => 
        {
            health += 60;
            healthText.innerText = health;
            gold -= 20;
            goldText.innerText = gold;
            arrow1.style.display = "none";
            upgrade_health.style.display = "none";
            message.innerText = "\n\nHealth replenished!"
            next.style.display = "inline";
            next.style.animation = "fade 4s";
            next.onclick = episodeDone;
        }
    } 
}


// Finish tutorial phase and lead player to game map
function episodeDone()
{
    document.body.style.backgroundImage = "url(./images/dungeon.jpg)";
    document.body.style.backgroundSize = "1440px";
    document.body.style.backgroundPositionX = "120%";
    document.body.style.backgroundPositionY = "0%";
    next.style.display = "none";
    seller.style.display = "none";
    healthPack.style.display = "none";
    upgrader.style.display = "none";
    hero.style.left = "200px";
    hero.style.top = "500px";
    hero.style.width = "330px";
    dragon.style.display = "inline";
    dragon.style.right = "50px";
    dragon.style.top = "200px";
    message.innerText = "\n\nAttack with all your might!";
    attack_button.style.display = "inline";
    attack_button.style.animation = "fade infinite 1s";
    button2.style.display = "none";

    ctr = 0;
    attack_button.onclick = () =>
    {
        attack_button.style.display = "none";
        sword.style.display = "inline";
        conv4.style.display = "inline";
        next.style.display = "inline";

        next.onclick = () => 
        { 
            if(ctr == 0)
            {
                conv4.style.display = "none";
                conv5.style.display = "inline"; 
                rip.style.display = "inline";
                dragon.style.display = "none";
                sword.style.display = "none";
                message.innerText = "\n\nYou have defeated Jaris, but . . .\n\nwhat army is he talking about?"
            }
            else if(ctr == 1)
            {
                next.style.animation = "fade infinite 2s";
                showMap();
            }
            ctr++;
        }
    }
}


function showMap()
{
    message.innerText = "\nIs it over . . . \n\nor is it just the beginning?";
    next.onclick = () => 
    { 
        message.innerText = "\nWe're receving reports of Jaris'\n\n creatures all over the village!\n\nYou must save them!";
        document.body.style.backgroundImage = "url(./images/map.png)";
        document.body.style.backgroundSize = "1480px";
        document.body.style.backgroundPositionX = "30%";
        hero.style.display = "none";
        rip.style.display = "none";
        conv5.style.display = "none";
        minion1.style.display = "inline";
        minion2.style.display = "inline";
        next.style.display = "none";
        visit_button1.style.display = "inline";
        visit_button2.style.display = "inline";

        visit_button1.onclick = () => { loadScene("lava"); }
        visit_button2.onclick = () => { loadScene("cave"); }
 
    }
}


let env = [];


// Displays changing stats of current villains throughout gameplay
function loadScene(scene)
{
    visit_button1.style.display = "none";
    visit_button2.style.display = "none";
    if(scene === "lava")
    {
        document.body.style.backgroundImage = "url(./images/lava_chamber.jpg)";
        minion2.style.display = "none";
    }
    else if(scene === "cave")
    {
        document.body.style.backgroundImage = "url(./images/skull_cave.jpg)";
        minion1.style.display = "none";
    }
}





