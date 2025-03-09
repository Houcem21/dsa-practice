//Normal tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = []
    }

    addChild(child) {
        this.children.push(child)
    }
}

//Binary Search Tree

class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if (!this.root) {
            this.root = newNode;
            return
        }
        // Not a root
        let current = this.root;
        while(true) {
            //Keep looping and changing the current till you find a node that can store our value
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}


//Display
const body = document.getElementsByTagName('body')[0]

function display(text) {
    body.innerHTML += "<h1>"+ text + "</h1>"
}

let bst = new BSTree();
bst.insert(10);
bst.insert(5);
console.log(bst)