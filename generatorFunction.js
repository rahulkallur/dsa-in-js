function* generatorExample() {
    console.log("Start");
    yield 1; // Pauses here, returning 1
    console.log("After first yield");
    yield 2; // Pauses here, returning 2
    console.log("After second yield");
    yield 3; // Ends the generator, returning 3
    console.log("After third yield");
    return 4;
  }
  
  const gen = generatorExample();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: true }
  console.log(gen.next()); // { value: undefined, done: true }