function bubbleSort(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            count++;
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    console.log(count)
    return arr;
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(bubbleSort([2, 15, 79, 23, 17, 79, 23]));
