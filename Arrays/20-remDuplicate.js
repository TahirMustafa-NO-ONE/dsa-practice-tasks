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

// removing duplicate element completely

function remDup2(arr){
    const sortArr = arr.sort((a, b) => (a-b));
    // console.log(sortArr);
    const newArr = [];
    for(let i=0; i<sortArr.length; i++){
        if(newArr.length>0 && newArr[newArr.length-1] === sortArr[i]){
            newArr.pop();
        } else{
            newArr.push(sortArr[i]);
        }
    }
    return newArr;
}

console.log(remDup2([2,4,2,1,3,5,6,4,3,6,3,2]));

// removing element that appears more than 1 time

function remDup3(arr){
    const count = {};

    for(let i=0; i<arr.length; i++){
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }

    console.log(count);

    return arr.filter(item => count[item] === 1);
}

console.log(remDup3([2,4,2,1,3,5,6,4,3,6,3,2]));