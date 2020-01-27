function pivot(arr, left = 0, right = arr.length-1){
    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[left];
    var swapIdx = 0;
    for(let i = left + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);

        }
    }
    swap(arr, left, swapIdx);
    return swapIdx;
}
console.log(pivot([4,1,8,3,5,9,2]));
// [4,1,8,3,5,9,2]
