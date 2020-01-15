function multiply(n,q) {
//     yang ini cukup kondisinya q>1
    if (n > 1 && q > 1) {
        return n * multiply(n, q - 1);
    }
    return n
}
console.log(multiply(5,3))
