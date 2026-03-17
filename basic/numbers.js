import {display} from './base.js';

// Check if number is prime
function isPrime(value) {
    if (value < 2) return false;
    const endDivider = Math.floor(Math.sqrt(value));
    for (let i = 2; i <= endDivider; i++) {
        if (value % i === 0) return false;
    }
    return true
}

// Prime factorization
function findPrimeFactors(val) {
    if (isPrime(val)) return [val, 1]
    let factors = []
    let value = val;
    let counter = 2;
    while (value > 1) {
        if (counter > val) return
        if (value % counter === 0) {factors.push(counter); value /= counter;}
        else counter++
    }
    return factors
}

// Find numbers of certain factors
function findUglyNumbers(max) {
    let uglyNums = [1,2,3,4,5,6]
    if (max < 7) return uglyNums

    for (let i = 7; i < max; i++) {
        let current = i
        
        while(current % 2 === 0) {
            current /= 2;
        }
        while(current % 3 === 0) {
            current /= 3;
        }
        while(current % 5 === 0) {
            current /= 5;
        }
        if (current===1) uglyNums.push(i)
    }
    return uglyNums

}

// Regex
function regCheck(regExp) {
    
}

export default isPrime