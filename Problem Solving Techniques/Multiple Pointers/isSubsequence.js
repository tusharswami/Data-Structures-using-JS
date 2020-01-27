//We are given with two strings
//we need to find out whether all the charcters in string 1 comes in string 2 maintaining the order of occurence

//let maintain teo pointers
//we check char of str1, and matches that with char of str2
//if match found, we increment i,
//and checks whether i equates to str1 length, if Yes, return true
//anyways we increment j
//at last return false;

function isSubsequence(str1, str2){
    let i = 0;
    let j = 0;
    if(!str1) return true;

    while(j < str2.length){
        if(str1[i] === str2[j]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false;
} 

// isSubsequence("hello","hello world")
//isSubsequence("hello","hello world") --> true
//isSubsequence("hello","elloh world") --> false 