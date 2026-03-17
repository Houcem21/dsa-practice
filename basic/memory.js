// No object reference, but instead property
function someLargeArray() {
    return new Array(10); 
}
var exampleObject = {
    'prop1': someLargeArray(), 
    'prop2': someLargeArray()
}
function printProperty(prop){    
    console.log(prop);
}   
printProperty(exampleObject.prop1);

// No global vars
function redGreenBlueCount(arr) {
    var counter = new Array(3).fill(0); 
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        counter[number]++
    }
    return counter;
}
console.log(redGreenBlueCount([0,1,1,1,2,2,2])); // [1, 3, 3]

// No DOM Leaks
var one = document.querySelector("#one");
var two = document.querySelector("#two");

function callBackExampleOne () {
    var two = document.querySelector("#two");
    if (!two) return;
    two.remove();
    one.removeEventListener("hover", callBackExampleOne)

}

function callBackExampleTwo () {
    var one = document.querySelector("#one");
    if (!one) return;
    one.remove();
    two.removeEventListener("hover", callBackExampleTwo)
}

one.addEventListener('click', callBackExampleOne);
two.addEventListener('click', callBackExampleTwo);
