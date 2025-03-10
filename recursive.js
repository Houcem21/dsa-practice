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

console.log(permutate(['F','A','C','E']))