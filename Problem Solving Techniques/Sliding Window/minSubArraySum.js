//We're given with two arguments
//1st is the array of numbers
//2nd is a sum
//We need to find out the size of smallest subarray whose elements sums to the given sum
//Solution with O(N)

function minSubArrayLength(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

minSubArrayLength([2, 3, 1, 2, 4, 3], 7);