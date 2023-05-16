//theme selector **
//paintbrush functionality**
//toggle grid lines
//fix eraser and current

//global color variables
var color = "black";
var boardColor = "white";
var backgroundColor = "white";
var toolboxColor = "grey";
var borderColors = "black";
var fontColor = "black";
var buttonColor = "gray";
var fontColor2 = "gray";
//creates color array for color pallette
const colors = [
  // Red Shades
  "#FF0000",
  "#FF4500",
  "#FF6347",
  "#FF7F50",
  "#FF8C00",

  // Orange Shades
  "#FFA500",
  "#FFB450",
  "#FFC066",
  "#FFD280",
  "#FFDE99",

  // Yellow Shades
  "#FFFF00",
  "#FFFF4D",
  "#FFFF99",
  "#FFFFB3",
  "#FFFFCC",

  // Green Shades
  "#008000",
  "#1D4F00",
  "#2B7300",
  "#3A9700",
  "#48BA00",

  // Blue Shades
  "#0000FF",
  "#1A1AFF",
  "#3333FF",
  "#4D4DFF",
  "#6666FF",

  // Purple Shades
  "#800080",
  "#9A1A9A",
  "#B333B3",
  "#CC4DCC",
  "#E666E6",

  // Brown Shades
  "#8B4513",
  "#A35C1C",
  "#BD7326",
  "#D68A30",
  "#F0A03A",

  // Black, White, and Gray Shades
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",

  // Pink Shades
  "#FF69B4",
  "#FF85BF",
  "#FFA0C9",
  "#FFBCCF",
  "#FFD7D9",

  // Cyan Shades
  "#00FFFF",
  "#4DFFFF",
  "#99FFFF",
  "#B3FFFF",
  "#CCFFFF",
];

setupPage();

function setupPage() {
  topPageContainerDraw();
  buttonContainerDraw();
  toolContainerDraw();
  eraserContainerDraw();
  colorWheel();
  createButtons();
  chalkboard();
  colorPalette();
}

function topPageContainerDraw() {
  var body = document.querySelector("body");
  var topPageContainer = document.createElement("div");
  topPageContainer.setAttribute("id", "topPageContainer");
  body.appendChild(topPageContainer);

  topPageContainer.style.border = `3px solid ${borderColors}`;
  topPageContainer.style.height = "100px";
  topPageContainer.style.width = "100%";
  topPageContainer.style.margin = "auto";
  topPageContainer.style.background = toolboxColor;
  topPageContainer.style.display = "flex";
  topPageContainer.style.alignItems = "center";
  topPageContainer.style.justifyContent = "space-around";
}

function toolContainerDraw() {
  var toolContainer = document.createElement("div");
  toolContainer.setAttribute("id", "toolContainer");
  var topPageContainer = document.getElementById("topPageContainer");
  topPageContainer.appendChild(toolContainer);

  toolContainer.style.border = `3px solid ${borderColors}`;
  toolContainer.style.height = "80px";
  toolContainer.style.width = "33%";
  toolContainer.style.margin = "auto";
  toolContainer.style.background = boardColor;
  toolContainer.style.display = "flex";
  toolContainer.style.alignItems = "center";
  toolContainer.style.justifyContent = "space-evenly";
}

function eraserContainerDraw() {
  var eraserPic = document.createElement("img");
  eraserPic.setAttribute("src", "/eraser.png");
  var toolContainer = document.getElementById('toolContainer');
  toolContainer.appendChild(eraserPic);

  eraserPic.style.height = "125px";
  eraserPic.style.width = "125px";
  eraserPic.style.marginRight = "15%";

  eraserPic.addEventListener("click", function () {
   color = boardColor;
  });
}

function colorWheel () {
  var toolContainer = document.getElementById('toolContainer');
  var colorWheel = document.createElement('input');
  colorWheel.setAttribute('type','color');
  colorWheel.setAttribute('id', 'colorWheel')
  toolContainer.appendChild(colorWheel);
  var colorWheelLabel = document.createElement('label');
  colorWheelLabel.setAttribute('for', 'colorWheel');
  colorWheelLabel.textContent = 'Color';
  toolContainer.appendChild(colorWheelLabel);

  colorWheelLabel.style.marginRight = '10%';
  colorWheelLabel.style.marginLeft = '-9%';
  colorWheelLabel.style.fontFamily = 'Georgia';
  colorWheelLabel.style.color = fontColor;
  colorWheel.style.marginLeft = '-10%';
  colorWheel.style.height = '90%';
  colorWheel.style.width = '15%';
  colorWheel.style.padding = '0';

  colorWheel.addEventListener('change', function() {
    color = colorWheel.value;
  });
}

//theme selector function here
function buttonContainerDraw() {
  var buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "themeContainer");
  var topPageContainer = document.querySelector("#topPageContainer");
  topPageContainer.appendChild(buttonContainer);

  buttonContainer.style.border = `3px solid ${borderColors}`;
  buttonContainer.style.height = "50px";
  buttonContainer.style.width = "33%";
  buttonContainer.style.margin = "auto";
  buttonContainer.style.background = boardColor;
  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "center";
  buttonContainer.style.justifyContent = "space-evenly";
}

//creates theme button
function buttonGenerator(buttonName, funcName) {
  var themeContainer = document.querySelector("#themeContainer");
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  themeContainer.appendChild(button);

  button.style.height = "40px";
  button.style.width = "100px";
  button.textContent = buttonName;
  button.style.color = fontColor;
  button.style.fontFamily = "Georgia";
  button.style.background = buttonColor;
  button.addEventListener("click", funcName);
}

function createButtons() {
  // creates multiple theme buttons
  buttonGenerator("Night Mode", nightMode);
  buttonGenerator("Day Mode", dayMode);
  buttonGenerator("Chalkboard", chalkboardTheme);
  buttonGenerator("Clear Page", clearPage);
}

//creates chalkboard and drawing effect
function chalkboard() {
  var body = document.querySelector("body");
  var mainContainer = document.createElement("div");
  body.appendChild(mainContainer);
  var chalkboard = document.createElement("div");
  mainContainer.appendChild(chalkboard);
  var toolbox = document.createElement("div");
  toolbox.setAttribute("id", "toolbox");
  body.appendChild(toolbox);

  body.style.backgroundColor = backgroundColor;
  //black outline, main container
  mainContainer.style.width = "98%";
  mainContainer.style.height = "500px";
  mainContainer.style.display = "flex";
  mainContainer.style.padding = "1%";
  mainContainer.style.justifyContent = "center";
  mainContainer.style.alignContent = "center";

  //color pallette for color picker
  toolbox.style.border = `3px solid ${borderColors}`;
  toolbox.style.margin = "50px auto";
  toolbox.style.background = toolboxColor;
  toolbox.style.height = "10vh";
  toolbox.style.width = "97%";
  toolbox.style.display = "flex";
  toolbox.style.flexWrap = "wrap";
  toolbox.style.alignItems = "center";
  toolbox.style.justifyContent = "space-evenly";

  //container for all tile divs
  chalkboard.style.height = "96%";
  chalkboard.style.width = "96%";
  chalkboard.style.padding = "2%";
  chalkboard.style.backgroundColor = borderColors;
  chalkboard.style.display = "flex";
  chalkboard.style.flexWrap = "wrap";

  //boolean for drawing
  var isPainting = false;
  //creation of all the tiles
  var gridSize = 100;
  for (var i = 0; i < gridSize * gridSize; i++) {
    var pixel = document.createElement("div");
    pixel.style.margin = "0";
    pixel.style.padding = "0";
    pixel.style.height = "1%";
    pixel.style.width = "1%";
    pixel.style.backgroundColor = boardColor;
    pixel.addEventListener("mousedown", function (e) {
      isPainting = true;
      e.target.style.backgroundColor = color;
    });
    pixel.addEventListener("mouseup", function () {
      isPainting = false;
    });
    pixel.addEventListener("mousemove", function (e) {
      if (isPainting) {
        e.target.style.backgroundColor = color;
      }
    });

    chalkboard.appendChild(pixel);
  }
}

//creates color selection buttons
function colorButton(buttonColor, text) {
  var toolbox = document.querySelector("#toolbox");
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  toolbox.appendChild(button);

  button.style.background = buttonColor;
  button.style.height = "30%";
  button.style.width = "5%";
  button.style.margin = "2px";
  button.style.position = "relative";
  button.style.border = `3px solid ${borderColors}`;
  button.textContent = text;
  button.style.fontFamily = "Georgia";
  button.style.fontWeight = "bold";
  button.style.color = fontColor2;

  button.addEventListener("click", function (e) {
    color = e.target.style.background;
  });
}

//assigns plethora of colors to toolbox
function colorPalette() {
  for (let i = 0; i < colors.length; i++) {
    colorButton(colors[i], "");
  }
}

function clearPage () {
    document.body.innerHTML = "";
    setupPage();
}

//color theme nightMode
function nightMode() {
  backgroundColor = "#121212";
  color = "white";
  borderColors = "gray";
  toolboxColor = "#121212";
  boardColor = "#121212";
  fontColor = "#800000";
  buttonColor = "gray";
  fontColor2 = "red";

  document.body.innerHTML = "";
  setupPage();
}
//color theme dayMode
function dayMode() {
  backgroundColor = "white";
  color = "black";
  borderColors = "black";
  toolboxColor = "gray";
  boardColor = "white";
  fontColor = "black";
  buttonColor = "white";
  fontColor2 = "gray";

  document.body.innerHTML = "";
  setupPage();
}
//color theme chalkboard
function chalkboardTheme() {
  backgroundColor = "lightBlue";
  color = "white";
  borderColors = "brown";
  toolboxColor = "yellow";
  boardColor = "forestgreen";
  fontColor = "yellow";
  buttonColor = "brown";
  fontColor2 = "black";

  document.body.innerHTML = "";
  setupPage();
}

