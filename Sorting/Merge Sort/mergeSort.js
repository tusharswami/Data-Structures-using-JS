function mergeTwoSorted(arr1, arr2){
    var result = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return mergeTwoSorted(left, right);
}
console.log(mergeSort([55, 2, 9, 20, 6]));