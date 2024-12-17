function findMinDiffPairs(measurements) {
    // Step 1: Sort the measurements in ascending order
    measurements.sort((a, b) => a - b);

    // Step 2: Initialize variables to track the minimum difference
    let minDiff = Infinity;
    let pairs = [];

    // Step 3: Find the minimum difference and the corresponding pairs
    for (let i = 1; i < measurements.length; i++) {
        let diff = measurements[i] - measurements[i - 1];
        
        // If the difference is smaller than the current minDiff, reset the pairs
        if (diff < minDiff) {
            minDiff = diff;
            pairs = [[measurements[i - 1], measurements[i]]];
        }
        // If the difference matches the minDiff, add the pair
        else if (diff === minDiff) {
            pairs.push([measurements[i - 1], measurements[i]]);
        }
    }

    // Step 4: Print the pairs with the minimum difference
    pairs.forEach(pair => {
        console.log(pair[0], pair[1]);
    });
}

// Example usage
const measurements = [-1, 3, 6, -5, 0];
findMinDiffPairs(measurements);