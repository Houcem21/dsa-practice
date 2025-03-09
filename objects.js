const body = document.getElementsByTagName('body')[0]
const text = document.createElement('h1')
text.innerHTML = "hello"
body.appendChild(text)

function displayText(inputText) {
    text.innerHTML = ""
    text.innerHTML = inputText;
}

function getAnything() {
    return 'anything'
}

// Create Class and add properties

function Vehicle(brand,year,input) {
    this.brand = brand;
    this.year = year;

    this.displayBrand = function(extra) {
        displayText(brand+extra);
    }
    this.displayYear = function() {
        displayText(year);
    }
}

var newCar = new Vehicle('ford', 1992)

Vehicle.prototype.creator = "Thomas"

Vehicle.prototype.displayCreator = function logAnything() {
    displayText(this.creator)
}

newCar.displayCreator()

// Basic objects

var obj = {}
obj['key'] = "010";
console.log(obj.key)

function Animal(name, type) {
    this.name = name;
    this.type = type;

    this.sayName = function() {displayText(name)}
}

function Dog(name) {
    Animal.call(this, name, "Dog")
}