/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = []
    let set = new Set(nums);
    for (let n = 1; n <= nums.length; n++){
        if (!set.has(n)){
            result.push(n);
        }
    }
    return result;    
};
