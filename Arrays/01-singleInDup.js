function singleinDup(arr){
    let single = 0;
    for(let num of arr){
        single = single ^ num;
    }
    return single;
}

console.log(singleinDup([2,4,8,4,3,2,8]));
