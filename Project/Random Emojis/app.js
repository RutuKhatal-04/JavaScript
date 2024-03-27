const btn = document.querySelector("#emojie");
const emojies = [
  "😊",
  "😂",
  "💕",
  "🤣",
  "😒",
  "😁",
  "🤷‍♀️",
  "😎",
  "😜",
  "😉",
  "🤩",
  "🤔",
  "🤗",
];

btn.addEventListener("mouseover", () => {
  btn.innerHTML = emojies[Math.floor(Math.random() * emojies.length)];
});
