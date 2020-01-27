function bubbleSort(arr){
    let count = 0;
    for(let i = arr.length-1; i > 0; i--){
        for(let j = 0; j <= i-1; j++){
            count++;
            if(arr[i] < arr[j]){
                swap(arr, i, j);
            }
        }
    }
    console.log(count);
    return arr;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// console.log(bubbleSort([2, 15, 79, 23, 17]));
console.log(bubbleSort([2, 16, 79, 23, 17, 2, 15, 79, 23]))