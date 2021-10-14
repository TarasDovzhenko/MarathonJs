let player1 = {
  name: "Taras",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["axe", "saber", "revolver"],
  attack() {
    console.log(player1.name + " fight");
  },
};

let player2 = {
  name: "Petro",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["musket", "shotgun", "bomb"],
  attack() {
    console.log(player2.name + " fight");
  },
};

function createPlayer(player, namePlayer) {
  let div1 = document.createElement("div");
  div1.classList.add(player);

  let div2 = document.createElement("div");
  div2.classList.add("progressbar");

  let div3 = document.createElement("div");
  div3.classList.add("life");
  div3.style.width = namePlayer.hp + "%";

  let div4 = document.createElement("div");
  div4.classList.add("name");
  div4.innerText = namePlayer.name;

  let div5 = document.createElement("div");
  div5.classList.add("character");

  let img = document.createElement("img");
  img.src = namePlayer.img;

  div2.appendChild(div3);
  div2.appendChild(div4);
  div5.appendChild(img);
  div1.appendChild(div2);
  div1.appendChild(div5);

  let arenas = document.querySelector(".arenas");
  arenas.appendChild(div1);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
