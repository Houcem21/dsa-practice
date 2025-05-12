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


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const remArray = arr.slice(i)
        const minEl = Math.min(...remArray)
        console.log(remArray,minEl)
        let temp = element;
    }
}

const array = [11,0,3,14,1,6,14,17,4,2,3]
const result = selectionSort(array)

console.log(result)