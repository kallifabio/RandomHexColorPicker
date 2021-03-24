for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.container').appendChild(box);
}

const btnRefresh = document.querySelector('.btnRefresh');
const randomColorBlock = document.querySelectorAll('.box');

function randomHexColorCode() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach(e => {
    var newColor = randomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}

/*function copy() {
  var copyText = document.getElementById(".box");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}*/
