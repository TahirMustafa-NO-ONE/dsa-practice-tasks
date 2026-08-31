// in a sequence there is one element missing and one appear two times 
// (means one time in the missing element place)
// return duplicate and missing

function setMis(arr){
    const n = arr.length;
    const expSum = (n*(n+1))/2; // Expected sum
    const expSqSum = (n*(n+1)*(2*n+1))/6; // Expected sum of squares

    let actSum = 0; // Actual calculated sum of given array
    let actSqSum = 0 // actual calculated sum of square of given array

    for(let num of arr){
        actSum += num;
        actSqSum += num*num;
    }

    const diff = actSum - expSum;
    const sum = (actSqSum - expSqSum)/diff;

    const duplicate = (sum + diff)/2;
    const missing = sum - duplicate;

    return [duplicate, missing];
}

console.log(setMis([2,3,5,5,6])); // does not work for this
console.log(setMis([1,2,2,4,5]));