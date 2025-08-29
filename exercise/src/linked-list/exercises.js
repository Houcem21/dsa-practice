// Reverse a singly linked list

import {SinglyLinkedList} from './singleLinked.js';

function reverseSinglyLinkedList(sll) {
    for (let ct= 0; ct < sll.size; ct++) {
        console.log(sll.head)
        
        sll.head = sll.head.next

    }
}


const sll = new SinglyLinkedList();
sll.insert('a')
sll.insert('b')
sll.insert('c')
sll.insert('d')
reverseSinglyLinkedList(sll)