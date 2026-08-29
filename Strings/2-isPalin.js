function isPalindrome(str){
    let arr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        if(arr[left] !== arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // return true
console.log(isPalindrome("race a car")); // return false