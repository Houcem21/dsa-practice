const n = 9;
const k = 6;
const p = 2;



function createAndFillArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(0)
    }
    return arr
}

function Props() {
    let x;
    this.setX = function(number) {
        x = number;
    }
    this.getX = function() {
        return x;
    }
}

let props = new Props();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Pick a number: ', number => {
    props.setX(number)
    console.log(props.getX())
    readline.close();
  })
