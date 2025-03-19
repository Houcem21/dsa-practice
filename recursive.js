let memo = {}

// Fibonaci
function fibNumber(number) {
    if (number < 2) return number
    // if (!memo.number) memo.number
    return fibNumber(number - 1) + fibNumber(number - 2);
}

// Pascal Triangle
function pascalTriangle(arg) {
    let matrix = [[1]]
    for (let i = 1; i < arg; i++) {
        let row = [1]
        for (let j = 1; j < i; j++) {
            const val = matrix[i-1][j-1] + matrix[i-1][j]
            row.push(val)
        }
        row.push(1)
        matrix.push(row)
    }
    return matrix
}

// Binary converter
function findBinarySize(number) {
    if (!number) return
    else if (number < 1) return 0
    return 1 + findBinarySize(number / 2)
}

function convertToBinary(number) {
    const binValue = (10**(findBinarySize(number)-1))
    if (number === 0) return 0
    number -= 2**(findBinarySize(number)-1) 
    return binValue + convertToBinary(number);
}

// Array permutations
function permutate(array, pointer=array.length, permutations=[]) {
    const index = array.length - pointer;
    const subArray = array.slice(index)
    const perm = subArray.concat(array.slice(0,index))
    
    permutations.push(perm)
    permutations.push()
    if (subArray.length === 1) return permutations
    return permutate(array, pointer-1, permutations)
}

function swap(strArr, ind1, ind2) {
    let temp = strArr[ind1]
    strArr[ind1] = strArr[ind2]
    strArr[ind2] = temp;
}

function permute(strArr, begin, end) {
    if (begin == end) {
        console.log(strArr)
    } else {
        for (let i = begin; i < end + 1; i++) {
            swap(strArr, begin, i)
            permute(strArr, begin + 1, end)
            swap(strArr, begin, i)
        }
    }
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length -1)
}

// Flatten dictionary
let dictionary = {
    'Key1': '0',
    'Key2': {
        'a': '2',
        'b': '3',
        'c': {
            'd': '3',
            'e': '5'
        }
    }
}

function flatten(dictionary, flattened = {}) {
    for (var item in dictionary) {
        const element = dictionary[item]
        if(typeof(element) !== "object") {
            flattened[item] = element
        }
        else flatten(element, flattened)
    }
    return flattened
}

// Palindrome Checker
const pal = "aibohphobia"

function palindromeCheck(str, index= (str.length % 2 === 0) ? .5 : 0) {
    const mid = str.length / 2 - .5
    
    const upperInd = Math.floor(mid-index)
    const lowerInd = Math.floor(mid+index)
    console.log(upperInd,mid, lowerInd, index)
    if (index >= mid) return true
    if (str[upperInd] !== str[lowerInd]) return false
    index++
    return palindromeCheck(str, index)
}

console.log(palindromeCheck(pal))
console.log(palindromeCheck('egfillifge'))