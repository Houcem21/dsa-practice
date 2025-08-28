import displayText from '../index.js'

displayText('HI')

class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty = () => this.size == 0;

    insert(node) {
        if (this.head == null) this.head = new SinglyLinkedListNode(node);
        else {
            let temp = this.head;
            this.head = new SinglyLinkedListNode(node);
            this.head.next = temp
        }
        this.size++;
    }

    remove(nodeValue) {
        let counter = 0;
        let prev = null;
        let currentHead = this.head;
        while(++counter <= this.size) {
            if (currentHead.data == nodeValue) {
                switch (counter) {
                    case 1:
                        currentHead.data = null;
                        currentHead = this.head.next;
                        this.size--;
                        return this.head = this.head.next;;
                    case this.size:
                        // Logic todo
                        this.size--;
                        prev.next = null;
                        return;
                    default:
                        // Logic todo
                        prev.next = currentHead.next;
                        currentHead = null;
                        this.size--;
                        return;
                }
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        return undefined
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

let sll1 = new SinglyLinkedList();
sll1.insert('a');
sll1.insert('b');
sll1.insert('c');
sll1.insert('d');
sll1.insert('e');
sll1.insert('f');

sll1.search('g');

console.log(sll1)