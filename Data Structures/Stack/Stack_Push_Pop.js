class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;  
    }

    pop(){
        if(!this.first) return null;
        var popValue;
        popValue = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = popValue.next;
            popValue.next = null
        }
        this.size--;
        return popValue;
    }
}
var stack = new Stack();