/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   for (let n = 0; n<= nums.length; n++){
    let found = false;
    for (let j = 0; j<nums.length; j++){
        if (n === nums[j]){
            found = true;
            break;
        }
    }
    if (found === false){
        return n;
    }
   }     
};
