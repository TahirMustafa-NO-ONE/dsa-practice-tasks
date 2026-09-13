function swap(a, b){
    a ^= b;
    b ^= a;
    a ^= b;

    return [a, b];
}

console.log(swap(5, 8));