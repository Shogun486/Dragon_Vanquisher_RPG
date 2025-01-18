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
const next = document.querySelector("#next");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const message = document.querySelector("#text");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");
const villainHealth = document.querySelector("#villainHealth");
const villainName = document.querySelector("#villainName");
const healthPack = document.querySelector("#healthpack");
const upgrade_health = document.querySelector("#upgrade_health");
const weapon_upgrade1 = document.querySelector("#weapon_upgrade1");
const conv1 = document.querySelector("#conv1");
const conv2 = document.querySelector("#conv2");
const conv3 = document.querySelector("#conv3");
const conv4 = document.querySelector("#conv4");
const conv5 = document.querySelector("#conv5");
const hero = document.querySelector("#hero");
const seller = document.querySelector("#seller");
const upgrader = document.querySelector("#upgrader");
const dragon = document.querySelector("#dragon"); // this monster is part of the tutorial only
const minion1 = document.querySelector("#minion1");
const minion2 = document.querySelector("#minion2");
const fireball = document.querySelector("#fireball");
const sword = document.querySelector("#sword");
const rip = document.querySelector("#rip");
const rightPanel = document.querySelector("#rightPanel");
attackClicks = 0;

//showMap();


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

    rightPanel.style.display = "inline";
    
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
        rightPanel.style.display = "none";
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
    hero.style.width = "300px";
    hero.style.left = "500px";
    hero.style.top = "18px";
    dragon.style.display = "none";
    fireball.style.display = "none";
    arrow2.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    seller.style.display = "inline";
    upgrader.style.display = "block";
    healthPack.style.display = "block";
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
    weapon_upgrade1.style.display = "inline";
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

    weapon_upgrade1.onclick = () => 
    {
        gold -= 30;
        goldText.innerText = gold;
        message.innerText = "\nGold exchanged!\n\nSword upgraded!\n\nNow regain your health.";
        weapon_upgrade1.style.display = "none";
        upgrade_health.style.display = "inline";
        conv1.style.display = "none";
        arrow2.style.display = "none";
        arrow1.style.left = "535px";
        arrow1.style.bottom = "175px";

        upgrade_health.onclick = () => 
        {
            upgrade_health.style.display = "none";
            health += 60;
            healthText.innerText = health;
            gold -= 20;
            goldText.innerText = gold;
            arrow1.style.display = "none";
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
    upgrader.style.display = "none";
    healthPack.style.display = "none";

    hero.style.left = "200px";
    hero.style.top = "500px";
    hero.style.width = "330px";
    dragon.style.display = "inline";
    dragon.style.right = "50px";
    dragon.style.top = "200px";
    message.innerText = "\n\nAttack with all your might!";
    attack_button.style.display = "inline";
    button2.style.display = "none";
    rightPanel.style.display = "inline";

    ctr = 0;
    next.onclick = () => 
    { 
        if(ctr == 0)
        {
            villainHealth.innerText = "0";
            conv4.style.display = "none";
            conv5.style.display = "inline"; 
            rip.style.display = "inline";
            dragon.style.display = "none";
            sword.style.display = "none";
            message.innerText = "\n\nYou have defeated Jaris, but . . .\n\nwhat army is he talking about?";
            villainName.innerText += " (R.I.P.)";
        }
        else if(ctr == 1)
        {
            next.style.animation = "fade infinite 2s";
            rightPanel.style.display = "none";
            showMap();
        }
        ctr++;
    }
    
}

// Player free to choose which enemies to fight
function showMap()
{
    message.innerText = "\nWe're receving reports of Jaris'\n\n creatures all over the village!\n\nYou must defeat them!";
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


// Easily add creatures of your own and any attributes in this array
let env = [
    {
        name: "Flame Sorcerer",
        url: "url(./images/lava_chamber.jpg)",
        health: 70
    },
    {
        name: "Wolfman",
        url: "url(./images/skull_cave.jpg)",
        health: 90
    }
];


// Weapon animation
attack_button.onclick = () => {    
    
    if(attackClicks == 0) // clicked during tutorial mode
    {
        attack_button.style.display = "none";
        next.style.display = "inline";
        conv4.style.display = "inline";
    }
    else
    {

    }
    sword.style.display = "inline";
    attackClicks++;
}


// Displays changing stats of current villains throughout gameplay
function loadScene(scene)
{
    attack_button.style.display = "inline";
    visit_button1.style.display = "none";
    visit_button2.style.display = "none";
    rightPanel.style.display = "inline";
    hero.style.left = "200px";
    hero.style.top = "500px";
    hero.style.width = "330px";
    hero.style.display = "inline";
    let i;
    if(scene === "lava")
    {
        i = 0;
        document.body.style.backgroundImage = env[i].url;
        minion2.style.display = "none";
        minion1.style.top = "400px";
        minion1.style.width = "140px";

    }
    else if(scene === "cave")
    {
        i = 1;
        document.body.style.backgroundImage = env[i].url;
        minion1.style.display = "none";
        minion2.style.top = "400px";
        minion2.style.left = "1100px";
        minion2.style.width = "300px";
        minion2.style.transform = "rotate(0deg)"

    }
    villainName.innerText = env[i].name;
    villainHealth.innerText = env[i].health;
}





