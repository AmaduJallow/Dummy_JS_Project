const numbers = [3, 4, 5];
numbers.push(32)
console.log(numbers)

numbers.unshift(1, 2);
console.log(numbers);

numbers.splice(3, 0, "a", "b");
console.log(numbers);