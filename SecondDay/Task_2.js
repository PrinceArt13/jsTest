let fib = [0, 1];
let i = 2;
while (true) {
    let temp = fib[i - 1] + fib[i - 2];
    if (temp > 200) {
        break;
    }
    fib[i] = temp
    i++;
}
console.log(fib);
