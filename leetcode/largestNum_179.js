// My Solution
var largestNumber = function (nums) {
  const numStr = nums.map(String);

  numStr.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    return order2.localeCompare(order1);
  });

  const result = numStr.join("");
  return result[0] === "0" ? "0" : result;
};

console.log(largestNumber([3, 30, 34, 5, 9]));

// Optimized Solution
/*
const result = nums.sort((a, b) => {
        return `${b}${a}` - `${a}${b}` 
    }).join("")

    if(Number(result) === 0) return '0';
    return result
*/
