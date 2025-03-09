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
function permutate(array, pointer=array.length) {
    console.log(array.length-pointer+1)
    const subArray = array.slice(array.length-pointer+1)
    if (subArray.length === 1) return subArray
    let permutated = []
    permutated.push(...subArray)
    return permutated;
}

console.log(permutate(['A','C','D']))