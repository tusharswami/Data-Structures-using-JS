//we'll be given with two arguments
//first is the sorted array
//second is a average

//we'll have 2 pointer 
//1st starts from 0
//2nd starts from 1
//Calculate sum & divide by 2, and check it with 2nd arguments
//if tempavg is < avg, then j++
//else if tempavg > avg then i++
//else return true

function averagePair(arr, avg){
    if(arr.length < 2){
        return false;
    }
    let start=0;
    let end=arr.length-1;
    let avgTemp;
    while(start < end){
        avgTemp = (arr[start] + arr[end])/2;
        if(avgTemp === avg){
            return true;
        }else if(avgTemp < avg){
            start++;
        }else{
            end--;
        }
    }
    return false;
 } 
 
//  console.log(averagePair([1, 2, 3], 2.5));s
 //averagePair([1, 2, 3], 2.5); --> true
 //averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); --> true
 //averagePair([], 4) --> false