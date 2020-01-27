function bubbleSort(arr){
    const swap = (arr, i , j)=>{
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    let count = 0;
    let noSwaps = true;
    for(let i = arr.length-1; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j <= i-1; j++){
            count++;
            if(arr[j] > arr[j+1]){
                swap(arr, i, j);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    console.log(count);
    return arr;
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));