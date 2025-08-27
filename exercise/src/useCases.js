import displayText from "./index.js";
import { Stack } from "./stacks.js"; 
displayText("- hello from usecases -")

// Manage Cutomer Orders

class Customer {
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }
}

class CustomerLine {
    constructor(arr = []) {
        this.line = arr;
        this.size = this.line.length-1;
    }

    addOrder(customer) {
        this.line.push(customer);
    }
    deliverOrder() {
        const activeOrder = this.line.shift()
        displayText(activeOrder?.name);
        displayText(activeOrder?.order);
    }

    display() {
        displayText(this.line.join(', '))
    }
}

// let queue = new CustomerLine([]);
// const newCustomer = new Customer('eddy', 'meatballs')
// const newCustomerLater = new Customer('emmy', 'lasagna')
// queue.addOrder(newCustomer)
// queue.addOrder(newCustomerLater)
// queue.deliverOrder()

// Validate a set of parentheses

class ParanthesesValidator {
    constructor(str) {
        this.input = str;
        this.result = []
    }

    push(val) {
        return this.result.push(val);
    }
    pop() {
        return this.result.pop()
    }

    isEmpty() {
        return this.result.length === 0;
    }

    display() {
        displayText('the array is empty: ', this.isEmpty())
        displayText('the set is valid: ', this.check())
        displayText('the value is: ', this.result.join(', '))
    }

    check() {
        for (let letter of this.input) {
            switch (letter) {
                case '(':
                    this.push(letter)
                    break;
                case ')':
                    if (this.isEmpty()) return false;
                    this.pop();
                    break;
                default:
                    console.log('default case')
                    break;
            }
        }
        return this.isEmpty();
    }
}

// let paranthesesValidator = new ParanthesesValidator('(())))')
// paranthesesValidator.display()

// Sortable Stack

class StackSorter {
    constructor(array) {
        this.size = array.length
        this.unsortedStack = new Stack(array)
        this.sortedStack = new Stack()
    }

    sort() {
        while (!this.unsortedStack.isEmpty()) {
            const element = this.unsortedStack.pop();
            console.log(element)
            if (element > this.sortedStack.peek() || this.sortedStack.isEmpty()) {
                console.log(element, 'is bigger than', this.sortedStack.peek())
                this.sortedStack.push(element);
            }
            else {
                console.log(element, 'is smaller than', this.sortedStack.peek())
                while (!this.sortedStack.isEmpty() && element < this.sortedStack.peek()) {
                    const biggerElement = this.sortedStack.pop();
                    this.unsortedStack.stackArray.push(biggerElement);
                }
                this.sortedStack.push(element);
            }
        }
        console.log('sorted stack:', this.sortedStack.value())
    }

    display() {
        displayText(this.unsortedStack.value())
    }
}

// let stackSorter = new StackSorter([5, 1, 4, 3, 2]);
// stackSorter.display();
// stackSorter.sort();