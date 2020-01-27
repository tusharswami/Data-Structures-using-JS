function selectionSort(arr){
    const swap = (arr, i, j)=>{
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    let count=0;
    for(let i = 0; i < arr.length-1; i++){
        min = i;
        for(let j = i+1; j < arr.length; j++){
            count++;
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(i !== min){
            swap(arr, i, min);
        }
    }
    console.log(count);
    return arr;
}
console.log("Selection");
console.log(selectionSort([4, 5, 6, 7, 8, 1, 2, 3, 4, 5]));