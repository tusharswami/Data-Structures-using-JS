//function takes 2 arguments
//first -> an array
// second -> length of the sub-array
// Solution with O(n)

//have two temp variables 
//calculate sum of first num elements in the array, store that in a temp variables
////start a loop from num to end of the array length
//removing the predecessor value and adding the next value
//check new sum with with previous sum, keep the bigger
//return the bigger sum at the last

function maxSubArrayValues(arr, num){
    let sumTemp = 0;
    let maxTemp = 0;
    if(arr.length == 0){
        return 0;
    }
    for(let i = 0; i < num; i++){
        sumTemp += arr[i];
    }    
    maxTemp = sumTemp;
    for(let i = num; i < arr.length; i++){
        sumTemp = maxTemp - arr[i - num] + arr[i];
        maxTemp = Math.max(maxTemp, sumTemp);
    }
    return maxTemp;
}

//([1, 2, 5, 8, 6, 2, 3, 1], 2) -> 13
//           |<>|