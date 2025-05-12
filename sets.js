// Util Functions

const babyNumbers = new Set([1, 0, 2])
const smallNumbers = new Set([0, 1, 3, 1, 3, 4, 1, 2, 2])
const medNumbers = new Set([3,4,5,3,6,4])
const highNumbers = new Set([6,7,6,5,9,11])
const letters = new Set()

letters.add('a')
letters.add('b')
letters.delete('c')


function setIntersects(setA, setB) {
    const intersection = new Set();
    for (const element of setA) {
        if(setB.has(element)) intersection.add(element)
    }
    return intersection
}

function isSuperSet(setA, setB) {
    for (const element of setB) {
        if(!setA.has(element)) return false;
    }
    return true
}

function setUnified(setA, setB) {
    const unified = new Set()
    for (const element of setA) {
        unified.add(element)
    }
    for (const element of setB) {
        if (setA.has(element)) continue
        unified.add(element)
    }
    return unified
}

function findDifference(setA, setB) {
    const uniqueToA = new Set()
    for (const element of setA) {
        if (setB.has(element)) continue
        uniqueToA.add(element)
    }
    return uniqueToA
}

function checkForDuplicates(array) {
    const newSet = new Set(array);
    console.log(newSet.size, array.length)
    return newSet.size === array.length;
}

function getUniqueValues(arr1,arr2) {
    const uniqueValues = new Set(arr1.concat(arr2))
    return Array.from(uniqueValues)
}

console.log(getUniqueValues([2,1,4,4,5,2,21,5,0],[23,10,4,4,5,2,0]))