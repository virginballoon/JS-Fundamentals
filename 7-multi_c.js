const arguments = process.argv[2];
const isValid = arguments && !isNaN(arguments);

if (!isValid) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < arguments) {
    console.log("C is fun");
    i++;
  }
}