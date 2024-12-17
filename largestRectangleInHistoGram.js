function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = []; // Stack to store indices of the bars
  for (let i = 0; i <= heights.length; i++) {
    // Use a height of 0 for the imaginary bar at the end
    const currentHeight = i === heights.length ? 0 : heights[i];
    console.log("Current Height", currentHeight)
    // If the current bar is shorter than the bar at the stack's top, calculate area
    while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
      console.log(heights[stack[stack.length - 1]])
      const height = heights[stack.pop()]; // Height of the bar to be removed
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i); // Push current index onto the stack
    console.log("Stack", stack)
  }

  return maxArea;
}

// Example usage:
const histogram = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(histogram));