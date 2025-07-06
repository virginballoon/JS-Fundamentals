function add(a, b) {
  return a + b;
}
const firstArg = process.argv[2];
const secondArg = process.argv[3];
const num1 = Number(firstArg);
const num2 = Number(secondArg);
const sum = add(num1, num2);
console.log(sum);