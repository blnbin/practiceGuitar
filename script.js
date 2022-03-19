function getRandomMusicalAlphabet() {
  const map = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
  ];

  let seed = Math.floor(Math.random() * 7);
  while(map[seed] === window.prev) {
    seed = Math.floor(Math.random() * 7);
  }
  console.log(map[seed])
  return map[seed];
}

function changeOrSetMA() {
  const test_div = document.getElementById("alphabet");
  const alphabet = getRandomMusicalAlphabet();
  test_div.innerHTML = alphabet;
  return alphabet;
}

window.onload = function() {
  window.prev = changeOrSetMA(null);
  setInterval(() => {
   window.prev = changeOrSetMA(window.prev);
  }, 1200);
}