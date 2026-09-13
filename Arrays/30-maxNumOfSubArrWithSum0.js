const arr = [15, -2, 2, -8, 1, 7, 10];

function maxArray(arr) {

     const map = new Map();

     map.set(0, -1);
     let prefixSum = 0;
     let maxLen = 0;

     for (let i = 0; i < arr.length; i++) {
          prefixSum += arr[i];
          if (map.has(prefixSum)) {
               let length = i - map.get(prefixSum);
               maxLen = Math.max(maxLen, length);
          }else{
               map.set(prefixSum, i);
          }
     }

     return maxLen;

}

console.log(maxArray(arr));
