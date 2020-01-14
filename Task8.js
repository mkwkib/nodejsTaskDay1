function multiply(n,q) {
    if (n > 1 && q > 1) {
        return n * multiply(n, q - 1);
    }
    return n
}
console.log(multiply(5,3))