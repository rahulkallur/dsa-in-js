function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // Extract the least significant bit of n
    let bit = n & 1;
    console.log("Bit:", bit);
    // Shift result to the left by 1 and add the bit
    result = (result << 1) | bit;
    console.log("Result:", result);
    // Shift n to the right by 1
    n >>>= 1; // Use unsigned right shift to maintain unsigned behavior
  }
  return result >>> 0; // Convert to unsigned 32-bit integer
}

// Example usage
console.log(reverseBits(0b00000010100101000001111010011100)); // Output: 964176192
console.log(reverseBits(0b11111111111111111111111111111101)); // Output: 3221225471


// 10100 

// (1*2^4)+(0*2^3)+(1*2^2)+(0*2^1)+(0*2^0)
