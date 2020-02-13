class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        var NewNode = new Node(value);
        if(!this.root){
            this.root = NewNode;
            return this;
        }
        var valToCheck = this.root;
        while(true){
            if(value > valToCheck.value){
                if(!valToCheck.right){
                    valToCheck.right = NewNode;
                    return this;
                }
                valToCheck = valToCheck.right;
            }else{
                if(!valToCheck.left){
                    valToCheck.left = NewNode;
                    return this;
                }
                valToCheck = valToCheck.left;
            }
        }
        return this;
    }
    find(value){
        if(!this.root) return false;
        var valToCheck = this.root;
        while(true){
            if(valToCheck.value === value) return true;
            else{
                if(value > valToCheck.value){
                    if(!valToCheck.right) return false;
                    valToCheck = valToCheck.right;
                }else{
                    if(!valToCheck.left) return false;
                    valToCheck = valToCheck.left;
                }
            }
        }
    }
}
var bst = new BST();
//           10
//      5          15
//  3     6     11     18 