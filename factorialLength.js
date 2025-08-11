function count(n) {
    if (n < 0) return 0;
    if (n <= 1) return 1;
    
    let digits = 0;
    for (let i = 1; i <= n; i++) {
        digits += Math.log10(i);
    }
    return Math.floor(digits) + 1;
}