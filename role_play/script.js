// Player info
let playerHealth = 100;
let gold = 50;


// HTML elements selection 
const visitStore = document.querySelector("#button1");
const startTutorial = document.querySelector("#button2");
const visitMap = document.querySelector("#button3");
const returnToFight = document.querySelector("#button4");
const attack_button = document.querySelector("#attack_btn");
const fightM1 = document.querySelector("#visit_btn1");
const fightM2 = document.querySelector("#visit_btn2");
const next = document.querySelector("#next");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const message = document.querySelector("#text");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");
const villainHealthText = document.querySelector("#villainHealth");
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
const dragon = document.querySelector("#dragon"); // dragon is part of the tutorial only
const minion1 = document.querySelector("#minion1");
const minion2 = document.querySelector("#minion2");
const fireball = document.querySelector("#fireball");
const lava = document.querySelector("#lava");
const spear = document.querySelector("#spear");
const sword = document.querySelector("#sword");
const rip = document.querySelector("#rip");
const rightPanel = document.querySelector("#rightPanel");


let attackClicks = 0; // change to 1 when testing outside of tutorial, else set to 0
let ctr = 0;

//showMap();



// Starting screen
startTutorial.style.display = "inline";
startTutorial.onclick = playScene;


// Initial encounter with dragon (part of tutorial)
function playScene()
{
    document.body.style.backgroundImage = "url(./images/dungeon.jpg)";
    startTutorial.style.display = "none";
    visitStore.onclick = startStoreTutorial;

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
            playerHealth -= 60;
            healthText.innerText = playerHealth;
            arrow2.style.display = "inline";
            arrow2.style.bottom = "700px"; 
            arrow2.style.left = "180px"; 
            arrow2.style.height = "60px";
            arrow2.style.transform = "rotate(-135deg)";
            visitStore.style.display = "inline";
            next.style.display = "none";
            ctr++;
        }    
    }
}


// Store scene with seller (part of tutorial)
function startStoreTutorial()
{
    setupStore();
    dragon.style.display = "none";
    fireball.style.display = "none";
    arrow2.style.display = "none";
    visitStore.style.display = "none";
    startTutorial.style.display = "none";
    conv1.style.display = "block";
    next.onclick = storeTour; 
    next.style.display = "inline";
    next.style.animation = "fade 8s";
    message.innerText = "\n This is the village store.\n\nHere, you can recover your health \nand upgrade your sword. \n\nBut remember . . .  paradise comes at a cost.";
}
 

// Show store scene
function setupStore()
{
    visitStore.style.display = "none";
    document.body.style.backgroundImage = "url(./images/store.jpg)";
    document.body.style.backgroundSize = "1320px";
    document.body.style.backgroundPositionY = "-8%";
    document.body.style.backgroundPositionX = "230%";
    hero.style.display = "inline";
    hero.style.width = "300px";
    hero.style.left = "500px";
    hero.style.top = "18px";
    seller.style.display = "inline";
    upgrader.style.display = "block";
    healthPack.style.display = "block";
}


// Give tutorial on purchasing/upgrading items
function storeTour()
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
            playerHealth += 60;
            healthText.innerText = playerHealth;
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
    startTutorial.style.display = "none";
    rightPanel.style.display = "inline";

    ctr = 0;
    next.onclick = () => 
    { 
        if(ctr == 0)
        {
            conv4.style.display = "none";
            conv5.style.display = "inline"; 
            rip.style.display = "inline";
            dragon.style.display = "none";
            sword.style.display = "none";
            message.innerText = "\n\nYou have defeated Jaris, but . . .\n\nwhat army is he talking about?";
            villainName.innerText += " (R.I.P.)";
            ctr++;
        }
        else if(ctr == 1)
        {
            next.style.animation = "fade infinite 2s";
            rightPanel.style.display = "none";
            ctr++;
            showMap();
        }
    }
    
}


// Add creatures and their attributes in this array
let env = [
    {
        name: "Flamejade",
        url: "url(./images/lava_chamber.jpg)",
        projectile: "lava",
        health: 70,
        level: 3
    },
    {
        name: "Wolfman",
        url: "url(./images/skull_cave.jpg)",
        projectile: "a spear",
        health: 90,
        level: 6
    }
];


let i = -1;
// Player free to choose which enemies to fight
function showMap()
{
    hideStore();
    message.innerText = "\nWe're receving reports of Jaris'\n\n creatures all over the village!\n\nYou must defeat them!";
    document.body.style.backgroundImage = "url(./images/map.png)";
    document.body.style.backgroundSize = "1480px";
    document.body.style.backgroundPositionX = "30%";
    hero.style.display = "none";
    rip.style.display = "none";
    conv5.style.display = "none";
    minion1.style.display = "inline";
    minion1.style.width = '';
    minion1.style.right = '';
    minion1.style.top = '';
    minion2.style.display = "inline";
    minion2.style.width = '';
    minion2.style.left = '';
    minion2.style.top = '';
    minion2.style.transform = '';


    next.style.display = "none";
    visitMap.style.display = "none";
    fightM1.style.display = "inline";
    fightM2.style.display = "inline";
    visitStore.style.display = "inline";
    visitStore.onclick = () => 
    { 
        minion1.style.display = "none";
        minion2.style.display = "none";
        fightM1.style.display = "none";
        fightM2.style.display = "none";
        
        setupStore(); 
        visitMap.style.display = "inline";
        visitMap.onclick = () => { showMap(); }
    }
    fightM1.onclick = () => { i = getIndex("lava"); loadScene(i); }
    fightM2.onclick = () => { i = getIndex("cave"); loadScene(i); }
}


// Player's weapon animation
attack_button.onclick = () => 
{  
    attack_button.style.display = "none";
    if(attackClicks == 0) // clicked during tutorial mode
    {
        conv4.style.display = "inline";
        villainHealthText.innerText = "0";
    }
    else // clicked outside of tutorial
    {
        spear.style.display = "none";
        lava.style.display = "none";
        reduceEnemyHealth();
    }
    next.style.display = "inline";
    next.style.animation = "fade 1s infinite";
    sword.style.display = "inline";
    attackClicks++;
}



function getIndex(scene)
{
    if(scene === "lava")
    {
        return 0;
    }
    else if(scene === "cave")
    {
        return 1;    
    }

}

// Displays changing stats of current villains throughout gameplay
function loadScene(i)
{
    attack_button.style.display = "inline";
    fightM1.style.display = "none";
    fightM2.style.display = "none";
    rightPanel.style.display = "inline";
    hero.style.left = "200px";
    hero.style.top = "500px";
    hero.style.width = "330px";
    hero.style.display = "inline";
    if(i === 0)
    {
        document.body.style.backgroundImage = env[i].url;
        minion2.style.display = "none";
        minion1.style.top = "400px";
        minion1.style.width = "140px";
        minion1.style.display = "inline";
    }
    else if(i === 1)
    {
        document.body.style.backgroundImage = env[i].url;
        minion1.style.display = "none";
        minion2.style.display = "inline";
        minion2.style.top = "400px";
        minion2.style.left = "1100px";
        minion2.style.width = "300px";
        minion2.style.transform = "rotate(0deg)";
    }
  

    visitMap.style.display = "inline";
    visitMap.onclick = () => {
        hideBattleScene(i);
        showMap();
    }

    visitStore.style.display = "inline";
    visitStore.onclick = () => 
    {
        hideBattleScene(i);
        setupStore();
        message.innerText = "\n\nIf you have gold to give, \nyou're in luck!";
        visitMap.style.display = "inline";
        visitMap.onclick = () => { showMap(); }
        returnToFight.style.display = "inline";
        returnToFight.onclick = () => { 
            returnToFight.style.display = "none";
            hideStore();
            document.body.style.backgroundSize = "1480px";
            document.body.style.backgroundPositionX = "30%";
            loadScene(i); 
        };
        next.style.display = "none";
        minion1.style.display = "none";
    }

    let name = env[i].name;
    villainName.innerText = name;
    villainHealthText.innerText = env[i].health;
    message.innerText = "\n\nThis is " + name;

    next.onclick = () => 
    {
        sword.style.display = "none";
        next.style.display = "none";
        villainAttack(i);
    }
}


// Hides battle scene assets when transitioning to store
function hideBattleScene(i)
{
    rightPanel.style.display = "none";
    attack_button.style.display = "none";
    sword.style.display = "none";
    if(i === 0)
    {
        minion1.style.display = "none";
        lava.style.display = "none";
    }
    else if(i === 1)
    {
        minion2.style.display = "none";
        spear.style.display = "none";
    }
}


// When villain attacks player, reduce their health and check if still alive
function villainAttack(monster_i)
{
    if(monster_i === 0)
    {
        lava.style.display = "inline";
        lava.style.width = "280px";
        lava.style.height = "auto";
    }
    else if(monster_i === 1)
    {
        spear.style.display = "inline";
    }
    
    villainName.innerText += " threw " + env[i].projectile;
    attack_button.style.display = "inline";
    playerHealth = reducePlayerHealth();
    if(playerHealth <= 0)
        message.innerText = "Defeated!";
}


// Damage to enemy is not a constant amount
function reduceEnemyHealth()
{
    let min = 5;
    let max = env[i].health;
    let reduction = Math.floor(Math.random() * (max - min + 1)) + min;   
    let villainHealth = Number(villainHealthText.innerText) - reduction;
    villainHealthText.innerText = villainHealth;
    env[i].health = villainHealth;
}


// Damage to player varies based on current opponent's level
function reducePlayerHealth()
{
    let level = env[i].level;
    let min = 5;
    let max = Number(healthText.innerText);
    let reduction = level + Math.floor(Math.random() * (max - min + 1)) + min;   
    playerHealth = Number(healthText.innerText) - reduction;
    healthText.innerText = playerHealth;
    return playerHealth;
}


// Hide store assets when transitioning back to map and battle
function hideStore()
{
    upgrader.style.display = "none";
    seller.style.display = "none";
    healthPack.style.display = "none";
    weapon_upgrade1.style.display = "none";
    upgrade_health.style.display = "none";
    document.body.style.backgroundPositionY = "0%";
}



