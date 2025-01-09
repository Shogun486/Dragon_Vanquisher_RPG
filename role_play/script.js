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


// Monster attributes
const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60
    },
    {
      name: "dragon",
      level: 20,
      health: 300
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
    },
    {
		name: "fight",
		button_text: ["Attack", "Dodge", "Run"],
		button_function: [attack, dodge, goTown],
		message_text: "You are fighting a monster."
	},
    {
		name: "kill monster",
		button_text: ["Go to town square", "Go to town square", "Go to town square"],
		"button functions": [goTown, goTown, goTown],
		text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
	},
	{
		name: "lose",
		button_text: ["REPLAY?", "REPLAY?", "REPLAY?"],
		button_function: [restart, restart, restart],
		text: "You die. ☠️"
	},
	{
		name: "win",
		button_text: ["REPLAY?", "REPLAY?", "REPLAY?"],
		button_function: [restart, restart, restart],
		text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
    },
    /*
	{
		name: "easter egg",
		button_text: ["2", "8", "Go to town square?"],
		button_function: [pickTwo, pickEight, goTown],
		text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
	}
        */
];


// Player starting location: town sqaure
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


// Update UI based on location
function update(location)
{
    monsterStatsText.style.display = "none";
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

// Dragon battles
function fightSlime()
{
    fighting = 0;
    goFight();
}
function fightBeast()
{
    fighting = 1;
    goFight();
}

function fightDragon()
{
    fighting = 2;
    goFight();
}

function goFight()
{
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStatsText.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack()
{
    message.innerText = "The " + monsters[fighting].name + " attacks";
    health -= monsters[fighting].level;
    message.innerText += "You attacked with your " + weapons[currentWeapon].name;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if(health <= 0)
    {
        lose();
    }
    else if (monsterHealth <= 0)
    {
        fighting === 2 ? winGame() : defeatMonster();
    }

}

function dodge()
{
    message.innerText = "Dodged attack from" + monsters[fighting].name;
}

function defeatMonster()
{
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose() { update(locations[5]); }

function winGame() { update(locations[6]); }

function restart() 
{
	xp = 0;
	health = 100;
	gold = 50;
	currentWeapon = 0;
	inventory = ["stick"];
	goldText.innerText = gold;
	healthText.innerText = health;
	xpText.innerText = xp;
	goTown();
}
