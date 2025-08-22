import HashTable from "../src/hashTable.js";

function runTest(desc, testFun) {
    try {
        if (testFun()) console.log("Test passed", desc)
        else console.log("Test failed", desc)
    } catch (error) {
        console.log("Error: ", error.message)
    }
}

console.log("--- Running HashTable tests ---");

runTest("to retrieve a value after a collision", () => {
    const ht = new HashTable(17);
    ht.set(1, "val");
    ht.set(18, "sub");
    const result = ht.get(18);

    return result && result[1] == "sub";
});