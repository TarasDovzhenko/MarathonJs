let arenas = document.querySelector(".arenas");
let randomBtn = document.querySelector(".button");

let player1 = {
  player: 1,
  name: "Taras",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["axe", "saber", "revolver"],
  attack() {
    console.log(player1.name + " fight");
  },
};

let player2 = {
  player: 2,
  name: "Petro",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["musket", "shotgun", "bomb"],
  attack() {
    console.log(player2.name + " fight");
  },
};

function creatElement(tag, className) {
  let tagEl = document.createElement(tag);
  if (className) {
    tagEl.classList.add(className);
  }
  return tagEl;
}

function createPlayer(namePlayer) {
  let divPlayer = creatElement("div", "player" + namePlayer.player);

  let divProgressbar = creatElement("div", "progressbar");

  let divLife = creatElement("div", "life");
  divLife.style.width = namePlayer.hp + "%";

  let divName = creatElement("div", "name");
  divName.innerText = namePlayer.name;

  let divCharacter = creatElement("div", "character");

  let img = document.createElement("img");
  img.src = namePlayer.img;

  divProgressbar.appendChild(divLife);
  divProgressbar.appendChild(divName);
  divCharacter.appendChild(img);
  divPlayer.appendChild(divProgressbar);
  divPlayer.appendChild(divCharacter);

  return divPlayer;
}

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

function cgangeHP(player) {
  let playerLife = document.querySelector(".player" + player.player + " .life");
  player.hp -= randomInteger(1, 20);
  playerLife.style.width = player.hp + "%";

  if (player2.hp <= 0) {
    player1.hp = 0;

    arenas.appendChild(playerWin(player1.name));
  } else if (player1.hp <= 0) {
    player2.hp = 0;

    arenas.appendChild(playerWin(player2.name));
  }
}

randomBtn.addEventListener("click", fightClick);

function fightClick() {
  cgangeHP(player1);
  cgangeHP(player2);
}

function playerWin(name) {
  let winTitel = creatElement("div", "loseTitle");
  winTitel.innerText = name + " WIN";

  return winTitel;
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
