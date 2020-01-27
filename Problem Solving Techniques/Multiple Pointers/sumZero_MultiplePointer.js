// Should return the first pair that sums to Zero
//Sholution with O(n) Time Complexity

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    console.log(right);
    while(left < right){
        //calculate sum with values at left and right index
        //if sum < 0, left++
        //if sum > 0, right--
        //else return left right

        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

//[-3, -2, -1 0, 1, 2, 3] --> [-2, 2]