//function takes 2 arguments
//first -> an array
// second -> length of the sub-array

// one loop that runs through the whol array
// nested loop that runs num times starting from outer loop starting index
// calculate sum of nested loop elements and update max variable
// if sum > max then update max

function maxSubArrayValues(arr, num){
    let max = -1;
    let sum = max;
    if(arr.length == 0){
        return 0;
    }
    for(let i = 0 ; i < arr.length-num-1; i++){
        sum = 0;
        for(let j = i; j < i + num; j++){
            sum += arr[j];
        }
        if(sum > max){
            max = sum;
        }
    } 
    return max;
}

//([1, 2, 5, 8, 6, 2, 3, 1], 2) -> 13
//        |<>|