const fb = (n) => {
    if (n <= 2) return 1;
    return fb(n-1) + fb(n-2);
}
console.log('value:',fb(7));
console.log(fb(50));
