const arguments = process.argv[2];
const isValid = arguments && !isNaN(arguments);

if (!isValid) {
  console.log("Missing size");
} else {
  let i =0;
let j; 
let x = "X";
while (i != arguments)
{
j = 0;
while (j != arguments-1)
{
x += "X";
j++;
}
console.log(x);
x = "X";
i++;
}
}