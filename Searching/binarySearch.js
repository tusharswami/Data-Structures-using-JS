function binarySearch(arr, val){
    let left = 0;
    let right = arr.length-1;
    let middle = 0;
    while(left < right){
       middle = Math.ceil((left+right)/2); 
       if(arr[middle] === val){
           return middle;
       }else if(arr[middle] > val){
           right = middle - 1;
       }else{
           left =  middle;
       }
    }
    return -1;
  }
  console.log(binarySearch([1, 2,3,4,5,6,7,8,9,10,11,12,13,14], 10));
