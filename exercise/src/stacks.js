import displayText from "./index.js";

export class Stack {
    constructor(array=[]) {
        this.stackArray = array;
        this.length = array?.length;
    }

    peek() {
        return this.stackArray.at(-1);
    }
    push(value) {
        return this.stackArray.push(value);
    }
    pop() {
        return this.stackArray.pop();
    }
    isEmpty() {
        return this.stackArray.length === 0;
    }
    size() {
        return this.length;
    }
    value() {
        return this.stackArray.join(', ');
    }
    access(index) {
        const buffer = this.stackArray.slice();
        for (let i = index; i !== 0; i--) {
            buffer.pop();
        }
        return buffer.pop();
    }
    search(value) {
        const buffer = this.stackArray.slice();
        for (let i = 0; i < this.size(); i++) {
            if (buffer.pop() === value) return i;
        }
        return -1;
    }
}

let pancackes = new Stack(['mango','chocolate','cheese and honey', 'lemon'])
pancackes.push('chicken');
pancackes.pop();

displayText(pancackes.access(3));
displayText(pancackes.value());
displayText(pancackes.search('chocolate'));

class Queue {
    constructor(array) {
       this.inStack = new Stack();
       this.outStack = new Stack();
    }

    enqueue(value) {
        this.inStack.push(value);
    }

    dequeue() {
        if (this.outStack.isEmpty()) {
            while (!this.inStack.isEmpty()) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    output() {
        displayText("inbox: "+this.inStack.value())
        displayText("outbox: "+this.outStack.value())
    }
}

let queue = new Queue();
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)

queue.dequeue()
queue.output()