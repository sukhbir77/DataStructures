/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/


/*
For this problem we will use Moore's Algorithm of Majority Vote;

=> Declare two variables candidate and count, initialize them to 0;
=> If the count is Zero We will update our Current Candidate and increase its count;
=> Else if the next element is not equal to candidate then we will decrease the count by 1;
=> Else if its the same element then we will increase our count;

At last it is guaranteed that we will have our candidate;
*/


var majorityElement = (nums) => {
    let candidate = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(count == 0){
            candidate = nums[i];
            count++;
        }
        else if(nums[i] !== candidate){
            count--;
        }
        else{
            count++;
        }
    }
    return candidate;
}