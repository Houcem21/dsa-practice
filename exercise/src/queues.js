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

class Stack {
    constructor() {
        this.queue1 = new Queue([]);
        this.queue2 = new Queue([]);
    }

    push(value) {
        this.queue1.enqueue(value);
    }

    pop() {
        if (this.queue1.queueArray.length === 0) return undefined;

        while (this.queue1.queueArray.length > 1) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        let result = this.queue1.dequeue();

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return result;
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log("first element to remove is: ", stack.pop())
