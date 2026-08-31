// making duplicate appear unique
function remDup1(arr){
    const seen = new Set();
    const newArr = [];

    for(let num of arr){
        if(!seen.has(num)){
            seen.add(num);
            newArr.push(num);
        }
    }

    return newArr;
}

console.log(remDup1([2,4,2,1,3,5,6,4,3,6,3,2]));