import displayText from '../index.js'

displayText('HI')

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
        this.size = 0;
    }

    isEmpty = () => this.size == 0;

    insert(node) {
        if (this.head == null) this.head = new DoublyLinkedListNode(node);
        else {
            let temp = this.head;
            this.head = new DoublyLinkedListNode(node);
            this.head.next = temp
        }
        this.size++;
    }

    remove(nodeValue) {
        let counter = 0;
    }

    removeAtHead() {
        if (this.size ==0) return null; 

        this.head = this.head.next;
        this.size--;
        return this.head
    }

    search(query) {
        let currentHead = this.head;
        let counter = 0;
        while(++counter <= this.size) {
            if (currentHead.data == query) {
                console.log('item number:', counter); 
                return counter;
            }
            currentHead = currentHead.next;
        }
        console.log('not here.')
        return -1;
    }
}

let dll1 = new DoublyLinkedList();
dll1.insert('a');


dll1.search('g');

console.log(dll1)