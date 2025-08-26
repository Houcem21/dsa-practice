import displayText from "./index.js";

displayText("- hello from usecases -")

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

let queue = new CustomerLine([]);
const newCustomer = new Customer('eddy', 'meatballs')
const newCustomerLater = new Customer('emmy', 'lasagna')
queue.addOrder(newCustomer)
queue.addOrder(newCustomerLater)
queue.deliverOrder()


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

let paranthesesValidator = new ParanthesesValidator('(())))')
paranthesesValidator.display()

