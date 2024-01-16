function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter a value for n: ', input => {
    const n = parseInt(input);
    console.log(`The factorial of ${n} is: ${factorial(n)}`);
    readline.close();
});