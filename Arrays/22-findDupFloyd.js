// the goal is to find the duplicate in uniquw element without modifying the original array
// and in O(n) time and O(1) space complexity

function findDup(arr){
    let slow = arr[0];
    let fast = arr[0];

    do{
        slow = arr[slow];
        fast = arr[arr[fast]];
    }while(slow !== fast);

    slow = arr[0];

    while(slow !== fast){
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
}

console.log(findDup([2,4,3,1,3,6,5]));
console.log(findDup([2,4,4,5,1]));