function linearSearch(arr, element){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return i;
        }
    }
    return -1;
  }
  console.log(linearSearch([10,15,20,25,30], 15));