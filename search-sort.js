import { display } from "./base.js";

// Linear Search
function linearSearch(arr, query) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element == query) return true
    }
    return false
}

// Array Sort
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            const buffer = array[i];
            if (array[j] < array[i]) {
                array[i] = array[j]
                array[j] = buffer
            }
        }
    }
    return array
}

// Binary Search
function binarySearch(array, query) {
    let center = Math.floor(array.length / 2)  
    while (center > 1) {
        const median = array[center]
        console.log(median, query)
        if (query < median) array = array.slice(0, center)
        else if (query > median) array = array.slice(center)
        else if (median === query) {console.log('found'); return true}
        center = Math.floor(array.length / 2)
        if (center === 1 && (query === array[0] || query === array[1])) {
            console.log("found");
            return true
        }
    }
    console.log('not found')
    return false
}

// Second Attempt at Binary Search
function binSearch(array, n) {
    var lowIndex = 0, highIndex = array.length-1

    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (array[midIndex] == n) return midIndex
        else if (n> array[midIndex]) lowIndex = midIndex;
        else highIndex = midIndex
    }
    return -1
}

// More binary search cuz ts is hard
function binaryFreshSearch(array, q, begIndex = 0, endIndex = array.length) {
    const median = Math.floor(endIndex / 2)
    if (q > array[median]) {begIndex = median; endIndex=array.length}
    else {endIndex = median; begIndex = 0}
    console.log(array, begIndex, endIndex)
    if (q === array[median] || q === array[0]) return true
    if (endIndex === 1) return false
    return binaryFreshSearch(array.slice(begIndex, endIndex),q)
}

// Bubble sort
function bubbleSort(array) {
    for (let i = 0; i < array.length-1; i++) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
    }
    console.log(array)
}

function findMin(array) {
    let min = {'value': array[0], 'index': 0}
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (element < min.value) {
            min.value = element;
            min.index = i
        }
    }
    return min;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        const remArray = arr.slice(i)
        const minEl = findMin(remArray)
        console.log(arr,minEl.value, minEl.index+i)
        arr[i] = minEl.value
        arr[minEl.index+i] = element
    }
}

function insertionSort(arr) {
    let i,j,len=arr.length,value

    for (i = 0; i < len; i++) {
        value  = arr[i];
        console.log(value)
        for (j = i-1; j > -1 && arr[j]>value; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = value
    }
    return arr
}

function swapItems(arr,i,j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function findBigger(arr,val) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element>val) return {'index':i,'value':element}
    }
    return null
}

function findSmaller(arr,val) {
    for (let j = arr.length; j > -1; j--) {
        const element = arr[j];
        if (element<val) return {'index':j,'value':element}
    }
    return null
}

function subArray(arr, begIndex=0, endIndex=arr.length) {
    return arr.slice(begIndex,endIndex)
}

function quickSort(arr) {
    let len=arr.length,i,j,pivot,median, biggerFromLeft, smallerFromRight
    median = Math.floor(len/2)
    pivot = arr[median]
    swapItems(arr,median,len-1)
    while (true) {
        biggerFromLeft = findBigger(arr,pivot)
        smallerFromRight = findSmaller(arr,pivot)
        console.log(len, median,pivot,biggerFromLeft,smallerFromRight)
        if (!biggerFromLeft || !smallerFromRight) {
            swapItems(arr,biggerFromLeft.index,len-1)
            break;
        }
        if(biggerFromLeft?.index > smallerFromRight?.index) {
            swapItems(arr,biggerFromLeft.index,len-1)
            break
        }
        swapItems(arr,biggerFromLeft.index,smallerFromRight.index)
    }
    console.log(subArray(arr,0,median+1),subArray(arr,median+2))
    return arr
}

let array = [11,0,3,14,12,6,14,7,4,2,3,4,11,9,1,3]
const result = quickSort(array)

display(result)