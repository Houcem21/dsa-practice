import displayText from '../index.js';

displayText('HI');

// Build this properly

class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty = () => this.size == 0;

    insertAtHead(nodeValue) {
        if (this.head == null) {
            this.head = new DoublyLinkedListNode(nodeValue);
            this.tail = this.head;
        }
        else {
            let temp = new DoublyLinkedListNode(nodeValue);
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
        this.size++; 
    }

    insertAtTail(nodeValue) {
        if (this.tail == null) {
            this.head = new DoublyLinkedListNode(nodeValue);
            this.tail = this.head;
        }
        else {
            let temp = new DoublyLinkedListNode(nodeValue);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }
        this.size++; 
    }

    removeAtHead() {
        const temp = this.head;
        switch (this.size) {
            case 0:
                break;
            case 1:
                this.size--;
                this.head = null;
                this.tail = null;
                break;
            default:
                this.size--;
                this.head = this.head.next;
                this.head.prev = null;
                break;
        }
        return temp;
    }

    removeAtTail() {
        const temp = this.tail;
        switch (this.size) {
            case 0:
                break;
            case 1:
                this.size--;
                this.head = null;
                this.tail = null;
                break;
            default:
                this.size--;
                this.tail = this.tail.prev;
                this.tail.next = null;
                break;
        }
        return temp;
    }

    searchFromHead(value) {
        let currentHead = this.head;
        let counter = this.size;
        while (--counter>=0) {
            if (currentHead.data == value) return counter;
            currentHead = currentHead.next;
        }
        return -1;
    }

    searchFromTail(value) {
        let currentTail = this.tail;
        let counter = -1;
        while (++counter<this.size) {
            if (currentTail.data == value) return counter;
            currentTail = currentTail.prev;
        }
        return -1;
    }
}

let dll1 = new DoublyLinkedList();
dll1.insertAtHead('a');
dll1.insertAtHead('b');
dll1.insertAtHead('c');
dll1.insertAtHead('d');
dll1.insertAtHead('e');

console.log('item found at', dll1.searchFromTail('e'))
console.log(dll1)