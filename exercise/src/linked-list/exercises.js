// Reverse a singly linked list

import {SinglyLinkedList} from './singleLinked.js';

function reverseSinglyLinkedList(sll) {
    let reversedList = new SinglyLinkedList();
    const firstHead = sll.head;
    for (let ct= 0; ct < sll.size; ct++) {
        console.log(sll.head)
        reversedList.insert(sll.head);
        sll.head = sll.head.next
    }
    sll.head = firstHead;
    return reversedList;
}

function deleteDuplicates(sll) {
    let uniqueValues = new Set();
    let currentNode = sll.head;
    let prevNode = null;
    const originalSize = sll.size;
    for (let ct= 0; ct < originalSize; ct++) {
        if( uniqueValues.has(currentNode.data)) {
            prevNode.next = currentNode.next;
            currentNode = prevNode;
            sll.size--;
        }
        uniqueValues.add(currentNode.data)
        prevNode = currentNode
        currentNode = currentNode.next
    }
    console.log(sll)
    return uniqueValues;
}

const sll = new SinglyLinkedList();
sll.insert('a')
sll.insert('b')
sll.insert('c')
sll.insert('d')
sll.insert('d')
sll.insert('b')
sll.insert('c')
sll.insert('e')
console.log(deleteDuplicates(sll))