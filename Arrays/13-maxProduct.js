// MAximum Product SubArray
function maxProduct(nums){
    let minProd = nums[0], maxProd = nums[0], result = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i]<0) [minProd, maxProd] = [maxProd, minProd];
        minProd = Math.min(nums[i], minProd*nums[i]);
        maxProd = Math.max(nums[i], maxProd*nums[i]);
        result = Math.max(result, maxProd);
    }
    return result;
}

console.log(maxProduct([-1, -3, -10, 0, 6]));

// maximum product of three element

function maxProductOfThree(arr){
        let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
        let min1 = Infinity, min2 = Infinity;

        for (let num of arr){
            if(num > max1){
                max3=max2; 
                max2=max1;
                max1=num;
            } else if(num > max2){
                max3=max2;
                max2=num;
            } else if(num > max3){
                max3=num;
            }

            if(num < min1){
                min2=min1;
                min1=num;
            } else if(num < min2){
                min2=num
            }

        }

        return Math.max((min1*min2*max1), (max1*max2*max3));
}

console.log(maxProductOfThree([1, 2, 3, 4]));
console.log(maxProductOfThree([-10, -10, 1, 3, 2]));