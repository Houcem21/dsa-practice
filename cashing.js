// Based on Double Linked Lists
function LFUNode(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

function LFUDoublyLinkedList() {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

function LFUCashe(capacity) {
    this.keys = {};
    this.freq = {};
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
}