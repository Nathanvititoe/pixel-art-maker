//theme selector **
//paintbrush functionality**
//toggle grid lines
//fix eraser and current**

//global color variables
var color = "black";
var boardColor = "white";
var backgroundColor = "white";
var toolboxColor = "grey";
var borderColors = "black";
var fontColor = "black";
var buttonColor = "gray";
var fontColor2 = "black";
var chalkboardFrame = 'black';
var gridlines = 'black';
//creates color array for color pallette
const colors = [
  // Red Shades
"#FF0000", "#FF4500", "#FF6347", "#FF7F50", "#FF8C00",

// Orange Shades
"#FFA500", "#FFB450", "#FFC066", "#FFD280", "#FFDE99",

// Yellow Shades
"#FFFF00", "#FFFF4D", "#FFFF99", "#FFFFB3", "#FFFFCC",

// Green Shades
"#008000", "#1D4F00", "#2B7300", "#3A9700", "#48BA00",

// Blue Shades
"#0000FF", "#1A1AFF", "#3333FF", "#4D4DFF", "#6666FF",

// Purple Shades
"#800080", "#9A1A9A", "#B333B3", "#CC4DCC", "#E666E6",

// Brown Shades
"#8B4513", "#A35C1C", "#BD7326", "#D68A30", "#F0A03A",

// Black, White, and Gray Shades
"#000000", "#333333", "#666666", "#999999", "#CCCCCC",

// Pink Shades
"#FF69B4", "#FF85BF", "#FFA0C9", "#FFBCCF", "#FFD7D9",

// Cyan Shades
"#00FFFF", "#4DFFFF", "#99FFFF", "#B3FFFF", "#CCFFFF",

// Additional Colors
"#550000", "#AA0000", "#FF0000",
"#005500", "#00AA00", "#00FF00",
"#000055", "#0000AA", "#0000FF",
"#005555", "#00AAAA", "#00FFFF",
"#550055", "#AA00AA", "#FF00FF",
"#555500", "#AAAA00", "#FFFF00",
"#555555", "#AAAAAA", "#FFFFFF",
"#AA5500", "#FFAA00", "#FFD700",
"#6B8E23", "#BDB76B", "#EEE8AA",
"#8B008B", "#FF1493", "#FF69B4",
"#C71585", "#8B0000", "#CD5C5C",
"#FF7F50", "#FFA07A", "#B8860B",
"#DAA520", "#FFDAB9", "#FFC0CB",
"#DDA0DD"];

//the intial page setup
setupPage();

//calls all functions required for intial page setup
function setupPage() {
  topPageContainerDraw();
  currentColor();
  buttonContainerDraw();
  toolContainerDraw();
  eraserContainerDraw();
  colorWheel();
  createButtons();
  chalkboard();
  colorPalette();
  contactInfo();
}

//entire navbar div container
function topPageContainerDraw() {
  var body = document.querySelector("body");
  var topPageContainer = document.createElement("header");
  topPageContainer.setAttribute("id", "topPageContainer");
  body.appendChild(topPageContainer);

  topPageContainer.style.position = 'fixed';
  topPageContainer.style.border = `3px solid ${borderColors}`;
  topPageContainer.style.height = "100px";
  topPageContainer.style.width = "100%";
  topPageContainer.style.margin = "auto";
  topPageContainer.style.background = toolboxColor;
  topPageContainer.style.display = "flex";
  topPageContainer.style.alignItems = "center";
  topPageContainer.style.justifyContent = "space-around";
}

//adds container div for eraser and extended color selection
function toolContainerDraw() {
  var toolContainer = document.createElement("div");
  toolContainer.setAttribute("id", "toolContainer");
  var topPageContainer = document.getElementById("topPageContainer");
  topPageContainer.appendChild(toolContainer);

  toolContainer.style.border = `3px solid ${borderColors}`;
  toolContainer.style.height = "80px";
  toolContainer.style.width = "33%";
  toolContainer.style.margin = "0 auto";
  toolContainer.style.background = boardColor;
  toolContainer.style.display = "flex";
  toolContainer.style.alignItems = "center";
  toolContainer.style.justifyContent = "space-evenly";
}

//adds eraser img and functionality
function eraserContainerDraw() {
  var eraserPic = document.createElement("img");
  eraserPic.setAttribute("src", "/images/eraser.png");
  var toolContainer = document.getElementById("toolContainer");
  toolContainer.appendChild(eraserPic);

  eraserPic.style.height = "125px";
  eraserPic.style.width = "125px";
  eraserPic.style.marginRight = "15%";

  eraserPic.addEventListener("click", function () {
    color = boardColor;
  });
}

//creates the color selector option
function colorWheel() {
  var toolContainer = document.getElementById("toolContainer");
  var colorWheel = document.createElement("input");
  colorWheel.setAttribute("type", "color");
  colorWheel.setAttribute("id", "colorWheel");
  toolContainer.appendChild(colorWheel);
  var colorWheelLabel = document.createElement("label");
  colorWheelLabel.setAttribute("for", "colorWheel");
  colorWheelLabel.textContent = "Color Selector";
  toolContainer.appendChild(colorWheelLabel);

  colorWheelLabel.style.marginRight = "10%";
  colorWheelLabel.style.marginLeft = "-9%";
  colorWheelLabel.style.fontFamily = "Georgia";
  colorWheelLabel.style.color = fontColor2;
  colorWheel.style.marginLeft = "-10%";
  colorWheel.style.height = "90%";
  colorWheel.style.width = "15%";
  colorWheel.style.padding = "0";

  colorWheel.addEventListener("change", function () {
    color = colorWheel.value;
    updateCurrentColor();
  });
}

//creates current color paintbrush and defaults it
function currentColor() {
  var currentColorContainer = document.createElement("div");
  currentColorContainer.setAttribute('id', 'currentColor');
  topPageContainer.appendChild(currentColorContainer);
  var paintbrush = document.createElement('img');
  paintbrush.setAttribute('src', '/images/paintbrush.png')
  topPageContainer.appendChild(paintbrush);

  paintbrush.style.height = '70%';
  paintbrush.style.width = '3%';
  paintbrush.style.marginBottom = '1%';
  
  currentColorContainer.style.border = '2px solid black';
  currentColorContainer.style.height = '11%';
  currentColorContainer.style.width = '2%';
  currentColorContainer.style.marginTop = '2%';
  currentColorContainer.style.borderRadius = '10px';
  currentColorContainer.style.marginRight = '-0.25%';
  currentColorContainer.style.marginLeft = '75px';
  currentColorContainer.style.background = color;
  currentColorContainer.style.border = `2px solid ${borderColors}`;

  currentColorContainer.addEventListener('click', function(e) { 
    color = e.target.style.background; 
  })
}

//updates paintbrush current color whenever color is changed
function updateCurrentColor () {
  var currentColor = document.querySelector('#currentColor');
  currentColor.style.background = color;

}

//container div for navbar buttons
function buttonContainerDraw() {
  var buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "themeContainer");
  var topPageContainer = document.querySelector("#topPageContainer");
  topPageContainer.appendChild(buttonContainer);

  buttonContainer.style.border = `3px solid ${borderColors}`;
  buttonContainer.style.height = "50px";
  buttonContainer.style.width = "45%";
  buttonContainer.style.margin = "auto";
  buttonContainer.style.background = boardColor;
  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "center";
  buttonContainer.style.justifyContent = "space-evenly";
}

//creates navbar button individually
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
  // creates multiple theme/grid/clear buttons
  buttonGenerator("Night Mode", nightMode);
  buttonGenerator("Day Mode", dayMode);
  buttonGenerator("Chalkboard", chalkboardTheme);
  buttonGenerator('Clear Grid Lines', gridlinesToggle);
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
  //chalkboard frame
  mainContainer.style.width = "98%";
  mainContainer.style.height = "500px";
  mainContainer.style.display = "flex";
  mainContainer.style.padding = "1%";
  mainContainer.style.paddingTop = '10%';
  mainContainer.style.justifyContent = "center";
  mainContainer.style.alignContent = "center";

  //color pallette for color picker
  toolbox.style.border = `3px solid ${borderColors}`;
  toolbox.style.margin = "100px auto";
  toolbox.style.background = toolboxColor;
  toolbox.style.height = "10vh";
  toolbox.style.width = "97%";
  toolbox.style.display = "flex";
  toolbox.style.flexWrap = "wrap";
  toolbox.style.alignItems = "center";
  toolbox.style.justifyContent = "space-evenly";

  //container for all tile divs
  chalkboard.style.height = "500px";
  chalkboard.style.width = "96%";
  chalkboard.style.padding = "2%";
  chalkboard.style.backgroundColor = chalkboardFrame;
  chalkboard.style.display = "flex";
  chalkboard.style.flexWrap = "wrap";

  //boolean for drawing
  var isPainting = false;
  //creation of all the tiles
  var gridSize = 75.04;
  for (var i = 0; i < gridSize * gridSize; i++) {
    var pixel = document.createElement("div");
    pixel.style.margin = "0";
    pixel.style.padding = "0";
    pixel.style.height = "1%";
    pixel.style.width = "1%";
    pixel.style.backgroundColor = boardColor;
    pixel.style.border = `1px dotted ${gridlines}`;
    pixel.addEventListener("mousedown", function (e) {
      isPainting = true;
      e.target.style.backgroundColor = color;
    });
    pixel.addEventListener("mouseup", function () {
      isPainting = false;
    });
    pixel.addEventListener("mouseenter", function (e) {
      if (isPainting) {
        e.target.style.backgroundColor = color;
      }
    });
    chalkboard.appendChild(pixel);
  }
}

//toggles grid lines
function gridlinesToggle () {
  gridlines = boardColor;
  var bool = confirm('This will erase any progress, would you like to continue?');
  if(bool === true) {
    document.body.innerHTML = "";
    setupPage();
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
  button.style.width = "3%";
  button.style.margin = "2px";
  button.style.position = "relative";
  button.style.border = `3px solid ${borderColors}`;
  button.textContent = text;
  button.style.fontFamily = "Georgia";
  button.style.fontWeight = "bold";
  button.style.color = fontColor2;

  button.addEventListener("click", function (e) {
    color = e.target.style.background;
    updateCurrentColor();
  });
}

//assigns plethora of colors to toolbox
function colorPalette() {
  for (let i = 0; i < colors.length; i++) {
    colorButton(colors[i], "");
  }
}

//container for copyright and linkedin
function contactInfo () {
  var contactContainer = document.createElement('footer');
  var body = document.querySelector('body');
  contactContainer.setAttribute('id', 'contactContainer');
  body.appendChild(contactContainer);
//footer div
  contactContainer.style.position = 'fixed';
  contactContainer.style.height = '50px';
  contactContainer.style.width = '97%';
  contactContainer.style.margin = '0 auto';
  contactContainer.style.bottom = '5px';
  contactContainer.style.background = toolboxColor;
  contactContainer.style.border = `3px solid ${borderColors}`;
  contactContainer.style.display = 'flex';
  contactContainer.style.justifyContent = 'space-between';
  contactContainer.style.alignItems = 'center';
  //adds footer content inside div
  linkedin();
  var copyright = document.createElement('p');
  contactContainer.appendChild(copyright);
  copyright.textContent = '© Nathan Vititoe 2023';
  copyright.style.color = fontColor2;
  copyright.style.fontFamily = 'Georgia'
  linkedin();
}

//attaches linkedin logo with link
function linkedin() {
  var contactContainer = document.querySelector('#contactContainer');
  var linkedin = document.createElement('img');
  linkedin.setAttribute('src', '/images/linkedin.png');
  var a = document.createElement('a');
  a.setAttribute('href', 'https://www.linkedin.com/in/nathanvititoe/');
  a.setAttribute('targt', '_blank');
  contactContainer.appendChild(a);
  a.appendChild(linkedin);
  linkedin.style.height = '50px';
  linkedin.style.margin = '1%';
}

//resets page and confirms they are ok with erasing
function clearPage() {
  var bool = confirm('This will erase any progress, would you like to continue?');
  if(bool === true) {
    document.body.innerHTML = "";
    setupPage();
  } 
}

//color theme nightMode
function nightMode() {
  backgroundColor = "#121212";
  color = "white";
  borderColors = "#b042ff";
  toolboxColor = "#121212";
  boardColor = "#121212";
  fontColor = "#800000";
  buttonColor = "gray";
  fontColor2 = "red";
  chalkboardFrame = '#b042ff';
  gridlines = 'gray';
//confirms they are ok with erasing
  var bool = confirm('This will erase any progress, would you like to continue?');
  if(bool === true) {
    document.body.innerHTML = "";
    setupPage();
  } 
}

//color theme dayMode
function dayMode() {
  backgroundColor = "white";
  color = "black";
  borderColors = "black";
  toolboxColor = "gray";
  boardColor = "white";
  fontColor = "black";
  buttonColor = "gray";
  fontColor2 = "black";
  chalkboardFrame = 'black';
  gridlines = 'black';
//confirms they are ok with erasing
  var bool = confirm('This will erase any progress, would you like to continue?');
  if(bool === true) {
    document.body.innerHTML = "";
    setupPage();
  } 
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
  chalkboardFrame = 'brown';
  gridlines = 'brown';
//confirms they are ok with erasing
  var bool = confirm('This will erase any progress, would you like to continue?');
  if(bool === true) {
    document.body.innerHTML = "";
    setupPage();
  } 
}
