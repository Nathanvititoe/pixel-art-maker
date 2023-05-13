//theme selector
//change between click/mouseover/etc
//toggle grid lines

//global color variables
var color = 'black';
var boardColor = 'white';
var themes = ['Night Mode', 'Day Mode', 'Chalkboard'];
var backgroundColor = 'white';
var toolboxColor = 'grey'
var borderColors = 'black';
var fontColor = 'black';
var buttonColor = 'white';
var fontColor2 = 'gray'

chalkboardTheme();
// nightMode();
// dayMode();

// var themeModes = [nightMode(), dayMode(), chalkboardTheme()];  //HELP HERE
SelectorContainer();
// themeButton(themes[0]);  //HELP HERE
chalkboard();



//theme selector function here
function SelectorContainer () {
    var body = document.querySelector('body');
    var themeContainer = document.createElement('div');
    themeContainer.setAttribute('id', 'themeContainer');
    body.appendChild(themeContainer);

    themeContainer.style.border = `3px solid ${borderColors}`;
    themeContainer.style.height = '50px';
    themeContainer.style.width = '50%';
    themeContainer.style.margin = 'auto';
    themeContainer.style.background = toolboxColor;
    themeContainer.style.display = 'flex';
    themeContainer.style.alignItems = 'center';
    themeContainer.style.justifyContent = 'space-evenly';
}
//creates theme button
function Button (buttonName) {
var themeContainer = document.querySelector('#themeContainer');
var button = document.createElement('button');
    themeContainer.appendChild(button);

    button.style.height = '40px';
    button.style.width = '100px';
    button.textContent = buttonName;
    button.style.color = fontColor;
    button.style.fontFamily = 'Georgia';
    button.style.background = buttonColor;
    button.addEventListener('click', nightMode); //HELP HEREE
}
Button('Night Mode');
Button('Day Mode');
Button('Chalkboard');
Button('Grid Lines');
Button('Paint Brush');
Button('StickN\'Poke')


//creates multiple theme buttons
    //  for(var i = 0; i < 3; i++) {
    //     themeButton(themes[i]);
    //  }


//creates chalkboard and drawing effect
function chalkboard() {
    var body = document.querySelector('body');
    var mainContainer = document.createElement('div');
    body.appendChild(mainContainer);
    var chalkboard = document.createElement('div');
    mainContainer.appendChild(chalkboard);
    var toolbox = document.createElement('div');
    toolbox.setAttribute('id','toolbox');
    body.appendChild(toolbox);

    body.style.backgroundColor = backgroundColor;
    //black outline, main container
    mainContainer.style.width = '98%';
    mainContainer.style.height = '500px';
    mainContainer.style.display = 'flex';
    mainContainer.style.padding = '1%';
    mainContainer.style.justifyContent = 'center';
    mainContainer.style.alignContent= 'center';
    

    //color pallette for color picker
    toolbox.style.border = `3px solid ${borderColors}`;
    toolbox.style.margin = '50px auto';
    toolbox.style.background = toolboxColor;
    toolbox.style.height = '10vh';
    toolbox.style.width = '97%';
    toolbox.style.display = 'flex';
    toolbox.style.flexWrap = 'wrap';
    toolbox.style.alignItems = 'center';
    toolbox.style.justifyContent = 'space-evenly'

    //container for all tile divs 
    chalkboard.style.height = '96%';
    chalkboard.style.width = '100%';
    chalkboard.style.padding = '2%';
    chalkboard.style.backgroundColor = borderColors;
    chalkboard.style.display = 'flex';
    chalkboard.style.flexWrap = 'wrap';
    
    //creation of all the tiles
        var gridSize = 100;
    for(var i = 0; i < gridSize * gridSize; i++) {
        var pixel = document.createElement('div');
        pixel.style.margin = '0';
        pixel.style.padding = '0';
        pixel.style.height = '1%';
        pixel.style.width = '1%';
        pixel.style.backgroundColor = boardColor;
        pixel.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        });
        chalkboard.appendChild(pixel);
    }        
}
//creates color array for color pallette
var colors = [
    '#F44336', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#E53935', '#D32F2F', '#C62828', '#B71C1C',
    '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63',
    '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#F3E5F5', '#E1BEE7',
    '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C', '#EA80FC', '#E040FB',
    '#D500F9', '#AA00FF', '#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8',
    '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB',
    '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE',
    '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1',
    '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',
    '#039BE5', '#0288D1', '#0277BD', '#01579B', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#E0F7FA', '#B2EBF2',
    '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF',
    '#00E5FF', '#00B8D4', '#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B',
    '#00695C', '#004D40', '#00BFA5']



//creates color selection buttons
function colorButton (buttonColor, text) {
    var toolbox = document.querySelector('#toolbox');
    var button = document.createElement('button');
    toolbox.appendChild(button);

    button.style.background = buttonColor;
    button.style.height = '30%';
    button.style.width = '2%';
    button.style.margin = '2px';
    button.style.position = 'relative';
    button.style.border = `3px solid ${borderColors}`;
    button.textContent = text;
    button.style.fontFamily = 'Georgia';
    button.style.fontWeight = 'bold';
    button.style.color = fontColor2;

    button.addEventListener('click' , function (e) {
        color = e.target.style.background;
    })
}


//assigns plethora of colors to toolbox
colorButton(boardColor, 'ER');
colorButton(color, 'Cur')
for(var i = 0; i < colors.length; i++) {
    colorButton(colors[i],'');
}



//color theme nightMode
 function nightMode () {
    backgroundColor = '#121212';
    color = 'white';
    borderColors = 'gray';
    toolboxColor = '#121212';
    boardColor = '#121212';
    fontColor = '#800000';
    buttonColor = 'gray';
    fontColor2 = 'red'
}
//color theme dayMode
function dayMode () {
    backgroundColor = 'white';
    color = 'black';
    borderColors = 'black';
    toolboxColor = 'gray';
    boardColor = 'white';
    fontColor = 'black';
    buttonColor = 'white';
    fontColor2 = 'gray';
}
//color theme chalkboard
function chalkboardTheme () {
    backgroundColor = 'lightBlue';
    color = 'white';
    borderColors = 'brown';
    toolboxColor = 'yellow';
    boardColor = 'forestgreen';
    fontColor = 'yellow';
    buttonColor = 'brown';
    fontColor2 = 'black';
}


//paintbrush mode
//??if mousedown, start mouseenter, end at mouseup
function paintbrush () {

}
    