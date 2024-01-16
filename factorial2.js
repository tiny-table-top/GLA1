function func(num) {
    let result = 1;
    for(let i = 1; i < 6; i++) {
        result = result * i;
    }
    return result;
}
let value = func(5);
console.log(value);