function largestRectangle(heights) {
  let maxArea = 0;
  let stack = []; //

  for (let i = 0; i < heights.length; i++) {
    let currentHeight = i === heights.length ? 0 : heights[i];

    while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}

const histogram = [2, 1, 5, 6, 2, 3];
console.log(largestRectangle(histogram));
