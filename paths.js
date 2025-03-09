// convert to matrix
function stringToMatrix(str) {
    let matrix = []
    for (let i = 0; i < (str.length / 11); i++) {
        const newRow = []
        for (let j = 0; j < (str.length / 7); j++) {
            newRow.push(str.charAt(11 * i + j))
        }
        matrix.push(newRow)
    }
    return matrix
}

// recognize what kind of box based on value
function getBoxType(char) {
    switch (char) {
        case '%':
            return "obstacle"
        case 'e':
            return "exit"
        case 'x':
            return "start"  
        default:
            return "empty"
    }
}

// launch an empty box to fill the board
function createAndAppend(props, parent) {
    let emptyBox = document.createElement(props.tag || "div")
    emptyBox.className = props.class || "box"
    emptyBox.classList.add(getBoxType(props.value))
    emptyBox.classList.add(props.coordinates)
    emptyBox.dataset.coordinates = props.coordinates
    parent.appendChild(emptyBox)
}

// start a maze
function formatMaze(mazeString) {
    const mazeMatrix = stringToMatrix(mazeString)
    const container = document.getElementById("board-container")
    for (let i = 0; i < mazeString.length; i++) {
        createAndAppend({value: mazeString[i], coordinates: `${Math.floor(i/11)},${i%11}`}, container);
    }
}


let currentBox;
let counter = 0;
const targetBox = document.getElementsByClassName("exit")[0];

function walkForward() {
    if (!currentBox) currentBox = document.getElementsByClassName("start")[0];
    if (counter > 20) return
    counter++;
    const currentCoordinates = currentBox.getAttribute('data-coordinates').split(',')
    const forwardBox = document.getElementsByClassName(`${currentCoordinates[0]-1},${currentCoordinates[1]}`)[0]
    if (forwardBox.classList.contains('obstacle')) {
        
        return walkLeft();
    }
    forwardBox?.classList.add("checking");
    currentBox = forwardBox;
    if (currentBox.classList.contains("exit")) return 1
    setTimeout(walkForward, 1000);
}

function walkRight() {
    const currentCoordinates = currentBox.getAttribute('data-coordinates').split(',')
    const forwardBox = document.getElementsByClassName(`${currentCoordinates[0]},${Math.floor(currentCoordinates[1])+1}`)[0]
    if (forwardBox.classList.contains('obstacle')) {
        return walkForward()
    }
    forwardBox?.classList.add("checking");
    currentBox = forwardBox;
    setTimeout(walkRight, 1000);
}

function walkLeft() {
    console.log(currentBox)
    const currentCoordinates = currentBox.getAttribute('data-coordinates').split(',')
    const forwardBox = document.getElementsByClassName(`${currentCoordinates[0]},${Math.floor(currentCoordinates[1])-1}`)[0]
    if (forwardBox.classList.contains('obstacle')) {
        return walkForward()
    }
    forwardBox?.classList.add("checking");
    currentBox = forwardBox;
    setTimeout(walkLeft, 1000);
}

function walkBottom() {
    console.log(currentBox)
    const currentCoordinates = currentBox.getAttribute('data-coordinates').split(',')
    const forwardBox = document.getElementsByClassName(`${Math.floor(currentCoordinates[0])+1},${Math.floor(currentCoordinates[1])}`)[0]
    if (forwardBox.classList.contains('obstacle')) {
        return walkForward()
    }
    forwardBox?.classList.add("checking");
    currentBox = forwardBox;
    setTimeout(walkBottom, 1000);
}

// input, method calling and declaration
var mazeString =   
    `%e%%%%%%%%%%.....%...%%.%.%.%.%%%%.%.......%%.%%%%.%%.%%.%.....%.%%%%%%%%%%x%`

formatMaze(mazeString)
walkForward()