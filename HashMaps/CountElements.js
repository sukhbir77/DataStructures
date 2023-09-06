/*
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.
*/

function countElements(arr){
    let dic = new Set(arr);
    let ans = 0;

    for(let i = 0; i < arr.length; i++){
        if(dic.has(arr[i] + 1)){
            ans+=1
        }
    }

    return ans;
}

console.log(countElements([1,1,3,3,5,5,7,7]))
