import {display} from './base.js'

//FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER
//Memoise it
function findCombination(array, weight) {
    let hashMemo = {}
    for (let i = 0; i < array.length - 1; i++) {
        const diff = weight - array[i]
        if (hashMemo[diff] != undefined) return hashMemo[diff]
        for (let j = i+1; j < array.length; j++) { 
            if (array[j] === diff) {
                hashMemo[diff] = [i,j]
                return [i,j]
            }
        }
    }
    return -1
}

// IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH
function slice(array, begIndex, endIndex) {
    let slicedArray = []
    for (let i = begIndex; i <= endIndex; i++) {
        const element = array[i];
        slicedArray.push(element)
    }
    return slicedArray
}

// FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE
function findMedian(array) {
    const length = array.length
    const floor = Math.floor(length / 2)

    if (length % 2 === 0) return ((array[floor] + array[floor - 1]) / 2)
    return array[floor]
}

function findTwoArrayMedian(firstArr, secondArr) {
    const firstMedian = findMedian(firstArr)
    const secondMedian = findMedian(secondArr)
    const midIndex = Math.floor(firstArr.length / 2)
    
    console.log(firstArr, secondArr, firstMedian, secondMedian, midIndex)
    if (firstArr.length === 1) return (firstArr[0] + secondArr[0]) / 2
    if (firstMedian === secondMedian) return firstMedian
    else if (firstMedian > secondMedian) {
        firstArr.splice(0, midIndex)
        secondArr.length -= midIndex
    }
    else {
        secondArr.splice(0, midIndex)
        firstArr.length -= midIndex
    }
    return findTwoArrayMedian(firstArr, secondArr)
}

// FIND COMMON ELEMENTS IN K-SORTED ARRAYS
function findMin(ARRAYS) {
    let min = ARRAYS[0]
    ARRAYS.forEach(array => {
        if (array.length < min.length) min = array
    });
    return min
}
function findCommonElements(ARRAYS) {
    const minArray = findMin(ARRAYS)
    let minCount = minArray.length
    let count = minCount
    for (let i = 0; i < minCount; i++) {
        const checkNumber = minArray[i]
        console.log(checkNumber)
        let common = true;
        ARRAYS.forEach(array => {
            console.log(array, checkNumber, array.includes(checkNumber))
            if (!array.includes(checkNumber)) common = false;
        });
        if (!common) count--;
    }
    return count
}
// SPIRAL PRINT
function createMatrix(ARRAYS) {
    const minLength = findMin(ARRAYS).length
    let matrix = []
    ARRAYS.forEach(ARRAY => {
        ARRAY.length = minLength
        matrix.push(ARRAY)
    });
    
    return matrix
}

function logRight(matrix) {
    if (!matrix[0]) return -1
    const firstRow = matrix[0]
    firstRow.forEach(element => {
        console.log(element)
    });
    matrix.shift()
    console.log(matrix)
}

function logBottom(matrix) {
    if (!matrix[0]) return -1
    const lastCol = matrix[0].length
    matrix.forEach(array => {
        console.log(array[lastCol - 1])
        array.pop()
    });
    console.log(matrix)
}

function logLeft(matrix) {
    if (!matrix[0]) return -1
    const lastRow = matrix[matrix.length - 1]
    for (let i = lastRow.length - 1; i >= 0; i--) {
        const element = lastRow[i];
        console.log(element)
    }
    matrix.pop()
    console.log(matrix)
}

function logUp(matrix) {
    console.log(matrix)
    if (!matrix[0]) return -1
    for (let i = matrix.length - 1; i >= 0; i--) {
        const element = matrix[i][0];
        matrix[i].shift()
        console.log(element)
    }
    console.log(matrix)
}

function spiralPrint(matrix) {
    console.log(matrix)
    let count = 0
    //vertically
    while(matrix.length > 0) {
        logRight(matrix)
        logBottom(matrix)
        logLeft(matrix)
        logUp(matrix)
        count++
    }
}

// Matrix rotation 
function flipLeft(matrix) {
    let flippedMatrix = []
    for (let i = matrix.length - 1; i >=0 ; i--) {
        let row = []
        for (let j = 0; j < matrix[i].length; j++) {
            // cols
            row.push(matrix[j][i])
        }
        flippedMatrix.push(row)
    }
    return flippedMatrix
}