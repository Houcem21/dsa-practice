import {display} from './base.js';
import isPrime from './numbers.js';

var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789".split("");

// Simple encoding - poor
function encode(number) {
    let encoded = ""
    let length = String(number).length
    while(length > 0) {
        let coef = length !== 1 ? Math.pow(10, length - 2) : 1;
        var val = Math.floor(number / coef)
        encoded += DICTIONARY[val]
        length -= 2;
        number = Math.floor(number %coef)
    }
    return encoded
}

// Simple decoding - incorrect
function decode(str) {
    let decoded = ""
    str.split("").forEach(char => {
        let val = DICTIONARY.indexOf(char)
        decoded += val
    });
    return decoded
}

// Implement RSA later
const crypting = (message) => {
    const p = 17
    const q = 9
    const n = p * q
    const r = (p-1) * (q-1)

    const e = 3
    const d = (r+1) % e === 0 ? (r+1) / e : (r+1)


    const encrypt = () => {
        return message
    }
    return encrypt(message)
}
   