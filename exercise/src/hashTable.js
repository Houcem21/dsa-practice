import displayText from "./index.js";

// ----- Primzahlen hashing
// ----- Wählen sie ein Modulnummer aus : 11
// 4 % 11 = 4
// 13 % 11 = 2
// etc

export default class HashTable {
    constructor(size = 53) {
        this.keyMap = Array(size);
        this.size = size; 
    }

    _hash(key) {
        console.log()
        return key % this.size;
    }

    _doubleHash(key) {
        const p = this.size - 3;
        return p - (this._hash(key) % p);
    }

    get(key) {
        for (let i = 0; i < this.size; i++) {
            const index = (this._hash(key) + i * this._doubleHash(key)) % this.size;
            console.log('at loop ',i, ' ; index: ',index)
            if (this.keyMap[index]?.key === key) {
                return this.keyMap[index].value;
            }
        }
        return undefined
    }

    set(key, value) {
        console.log('value: ', value, ' ; key: ', key)
        console.log('first key: ', this._hash(key), ' remainder of', this.size)
        console.log('second key: ', this._doubleHash(key), ' function of', this.size-3)
        console.log('size: ', this.size)
        for (let i = 0; i < this.size; i++) {
            const index = (this._hash(key) + i * this._doubleHash(key)) % this.size;
            console.log('at loop ',i, ' ; index: ',index)
            if (!this.keyMap[index]) {
                this.keyMap[index] = {'key': key, 'value': value};
                console.log('Value inserted')
                return value;
            }
        }
        return undefined;
    }

    
}

let ht = new HashTable(17);
ht.set(1,100);
ht.set(2,200);
ht.set(3,300);
ht.set(11,400);
ht.set(12,500);
ht.set(33,600);
ht.set(51,1000);

ht.set(15,100);
ht.set(16,200);
ht.set(17,300);
ht.set(32,10);
ht.set(33,20);
displayText(ht.get(1));
displayText(ht.get(2));
displayText(ht.get(35));




// Linear probing
// set(key, value) {
//     let index = this._hash(key);
//     let counter = 0;
//     while (this.keyMap[index] !== undefined) {
//         if (counter++ > this.size) return;
//         index = (index + 1) % this.size; 
        
//     }
//     this.keyMap[index] = [key, value]
// }
// get(key) {
//     let index = this._hash(key);
//     let counter = 0;
//     while (this.keyMap[index] !== undefined) {
//         if (counter++ > this.size) return undefined
//         if (this.keyMap[index][0] === key) {
//             return this.keyMap[index];
//         }
//         index = (index + 1) % this.size;
//     }
//     return undefined;
// }

//Quadratic Probing
// set(key,value) {
//     let counter = 0;
//     let index = this._hash(key);
//     while (this.keyMap[index] !== undefined) {
//         if (counter++ > this.size) return
//         index = ((this._hash(key)+counter**2)) % this.size;
//         console.log(counter, index, key)
//     }
//     this.keyMap[index] = [key, value];
// }

// get(key) {
//     let counter = 0;
//     let index = this._hash(key);
//     while (this.keyMap[index] !== undefined) {
//         if (this.keyMap[index][0] === key) return this.keyMap[index]
//         if (counter++ > this.size) return undefined
//         index = (this._hash(key) + counter ** 2) % this.size;
//         console.log("looping",this.keyMap[index])
//     }
//     return undefined;
// }