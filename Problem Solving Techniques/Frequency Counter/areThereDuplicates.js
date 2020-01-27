//Take Variable Number of Arguments
//We Just need to check whether same argument is occuring more than one time

//Find out a way to take variable arguments in the array
//Create a counter Object
//Keeps arguments as the key
//Then, Check Whether any Key has Value greater than 1
//if Yes, return true
//Else, return false

function areThereDuplicates(){
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }

    for(let key in collection){
        if(collection[key] > 1){
            return true;
        }
    }
    return false;
}


//areThereDuplicates(1, 2, 3); --> false
//areThereDuplicates(1, 2, 2); --> true
