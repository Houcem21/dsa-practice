import displayText from "./index.js";

class Queue {
    constructor(array) {
        this.queueArray = array;
        this.length = array?.length;
    }
    value() {
        return this.queueArray.join(', ');
    }
    peek() {
        return this.queueArray[0];
    }
    enqueue(value) {
        return this.queueArray.push(value);
    }
    dequeue() {
        return this.queueArray.shift();
    }
    isEmpty() {
        return this.size === 0;
    }
    access(index) {
        const buffer = this.queueArray.slice()
        while(--index >= 0) {
            buffer.shift()
        }
        return buffer[0];
    }
    search(value) {
        const buffer = this.queueArray.slice()
        let counter = 0
        while(counter < this.length) {
            if(buffer.shift() === value) return counter;
            counter++;
        }
        return -1;
    }
}

let line = new Queue(['mike','emily','tucker','lily'])
line.dequeue()
line.enqueue('phil')
displayText(line.value())
displayText(line.access(1))

displayText(line.search('tucker'))