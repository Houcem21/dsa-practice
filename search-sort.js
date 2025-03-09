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

const array = [1,3,4,5,2,1,0,14,7,3,9,5,2,4]
const result = linearSearch(array, 2)

const sortedArray = sortArray(array)
display(sortedArray)
display(binSearch(sortedArray, 14))