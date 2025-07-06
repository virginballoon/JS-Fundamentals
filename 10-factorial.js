function factorial(numbr) {
  if (isNaN(numbr) || numbr <= 1) {
    return 1;
  }
  return numbr * factorial(numbr - 1);
}

const args = process.argv.slice(2);
const num = Number(args[0], 10);

console.log(factorial(num));