/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let vote = 1;
    for(let i =1;i<nums.length;i++){
        if(vote==0){
           candidate = nums[i]
            vote = 1;
        }
        else if(nums[i]== candidate){
            vote++
        }
        else{
            vote--
        }
    }

return candidate

};