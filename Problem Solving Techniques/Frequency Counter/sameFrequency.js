//We need to find out whether given two numbers have same occurences of digits inside them
//Solution in O(N)
//we may maintain two objects
//that will store digits as the key and value as the number of occurences
//we can match key value pair
// if matched then, return true
//if not then, return false

function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    let num1Frequency = {};
    let num2Frequency = {};
    if(str1.length != str2.length){
        return false;
    }
    for(let char of str1){ 
        num1Frequency[char] = (num1Frequency[char] || 0) + 1;
    }
    for(let char of str2){
        num2Frequency[char] = (num2Frequency[char] || 0)+ 1;
    }
//     for(let i = 0; i < str1.length; i++){
//         frequencyCounter1[str1.charAt(i)] = (frequencyCounter1[str1.charAt(i)] || 0) + 1;
//         frequencyCounter2[str2.charAt(i)] = (frequencyCounter2[str2.charAt(i)] || 0) + 1;
//     }
    for (let key in num1Frequency){
        if(num1Frequency[key] !== num2Frequency[key]){
            return false;
        }
    }
    return true;
}


sameFrequency(281, 812)
//sameFrequency(154, 114) -> false
//sameFrequency(22, 222)  -> false

