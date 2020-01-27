function getDigit(num, pos){
    return Math.floor(Math.abs(num/Math.pow(10, pos))%10);
}

function getLength(num){
    return Math.floor(Math.log10(num))+1;
}

function getMostDigits(arr){
    let maxNum = getLength(arr[0]);
    for(let i = 0; i < arr.length; i++){
        maxNum = Math.max(getLength(arr[i]), maxNum);
    }
    return maxNum;
}
function radixSort(arr){
    let maxNumDigit = getMostDigits(arr);
    for(let i = 0; i < maxNumDigit; i++){
        let nums = Array.from({length:10}, ()=> []);
        for(let k = 0; k < arr.length; k++){
            let digit = getDigit(arr[k], i);
            nums[digit].push(arr[k]);
        }
        arr = [].concat(...nums);
    }
    return arr;
}

console.log(radixSort([5,66,7,99,54,98,64654,651,494,61]))