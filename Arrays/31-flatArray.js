const arr = [1, [2, 3], [4, [5, 6]], 7];


function flatArray(arr){
    let result = [];
    for(let n of arr){
        if(Array.isArray(n)){
            result = result.concat(flatArray(n));
        } else {
            result.push(n)
        }
    }
    return result;
}

console.log(flatArray(arr));