class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var removedNode = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = removedNode.next;
            removedNode.next = null;
        }
        this.size--;
        return removedNode;
    }
}
var queue = new Queue();
