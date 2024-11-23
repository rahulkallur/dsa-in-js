function findPairIndices(arr, target) {
  const numIndices = new Map();

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    const complement = target - arr[i];
    console.log(complement)

    if (numIndices.has(complement)) {
        console.log("--------------------------------",[numIndices.get(complement), i])
      return [numIndices.get(complement), i];
    }

    numIndices.set(arr[i], i);
    console.log("NumIndices",numIndices);
  }

  return null; // Return null if no pair is found
}

// Example usage
const arr = [2, 7, 11, 15];
const target = 18;
const result = findPairIndices(arr, target);

if (result) {
  console.log(`Pair found at indices: ${result[0]} and ${result[1]}`);
} else {
  console.log("No pair found.");
}