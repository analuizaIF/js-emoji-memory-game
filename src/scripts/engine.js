const emojis = [
   "🌷",
    "🌷",
    "🦊",
    "🦊",
    "🐱",
   "🐱",
    "🐛",
    "🐛",
    "😶‍🌫",
    "😶‍🌫",
    "👻",
    "👻",
    "🍄",
    "🍄"

];
let openCards = [];

let shurflleEmojis = emojis.sort(() => (Math.random() > 0.5 ? e : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shurflleEmojis[i];
    document.querySelector(".game").appendChild(box);
}