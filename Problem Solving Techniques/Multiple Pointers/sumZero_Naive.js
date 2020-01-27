// Should return the first pair that sums to Zero
//Sholution with O(n^2)

//have two pointers
//lock one pointer at one index and loop through another pointer through the rest of the array
//checking whether value at the second pointer sums to Zero
// If Match not found increase index of First Pointer


function sumZero(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i + 1; j < arr.length-1; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

//[1, 2, 3, 0, -2, -5, -7] --> [-2, 2]