const firstArgument = process.argv[2];
const isNumber = !isNaN(firstArgument);
if (isNumber) 
{
    console.log(`My number : ${firstArgument}`)
}
else 
{
    console.log("Not a number");
}