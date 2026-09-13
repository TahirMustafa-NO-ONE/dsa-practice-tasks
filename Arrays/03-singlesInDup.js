function singles(nums){
    let xorAll = 0;
    for(let num of nums){
        xorAll ^= num;
    }

    const diffBit = xorAll & (-xorAll);

    let a = 0, b = 0;
    for(let num of nums){
        if(num & diffBit) a ^= num;
        else b ^= num;
    }
    return [a, b];
}

console.log(singles([2,4,8,7,4,3,2,8]));
