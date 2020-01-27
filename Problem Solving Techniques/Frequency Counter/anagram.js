function anagrams(str1, str2){
    let result = true;
    //If Length is different - return false
    if(str1.length != str2.length){
        return false;
    }
    //Maintain two objects with character as key and count of character
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for(let i = 0; i < str1.length; i++){
        frequencyCounter1[str1.charAt(i)] = (frequencyCounter1[str1.charAt(i)] || 0) + 1;
        frequencyCounter2[str2.charAt(i)] = (frequencyCounter2[str2.charAt(i)] || 0) + 1;
    }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

    //Check if value of a key in first object matches to value of the same key in another object
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] != frequencyCounter2[key]){
            return false;
        }
    }
    return result;
}