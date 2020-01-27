//Insertion Sort - Optimizes Solution
//1 2 9 20 6
//1 2 9 20 6
//1 2 9 20 6
//1 2 9 20 6
//1 2 9 20 6
//1 2 6 9 20

function insertionSort(arr){

    for(var i = 0; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([55, 2, 9, 20, 6]));