function multiply(n) {
    if (n > 1) {
        return n * multiply(n - 1)
    }
    return n
}
console.log(multiply(5))