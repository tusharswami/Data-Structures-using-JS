//Return Uniques number of values for a sorted array

//maintain two pointers
//i starting from index 0
//j starting from index 1
//if i == j, j++
//if i != j , i++ && array[i] == array[j]
//at last, return, i+1;

function countUniqueValues(arr){
    let i = 0;
    let j = 1;
    if(arr.length == 0){
        return 0;
    }
    while(j < arr.length){
        if(arr[i] == arr[j]){
            j++;
        }else{
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}
    
//[1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7] --> 7 
      