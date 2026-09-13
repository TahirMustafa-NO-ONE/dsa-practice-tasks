function moveZero(arr){
    let insertPos = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            [arr[insertPos], arr[i]] = [arr[i], arr[insertPos]];
            insertPos++;
        }
    }

    return arr;
}

console.log(moveZero([2,6,0,3,0,4,9,0,2]));