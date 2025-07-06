const numberofarguments = process.argv.length - 2; // Exclude the first two default arguments
if (numberofarguments === 0) {
  console.log("No argument");
}
else if (numberofarguments === 1) {
  console.log("Argument found");
}
else {  
  console.log("Arguments found");
}