class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var popItem = this.tail;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        }else{
            var newTail = this.tail.prev;
            newTail.next = null;
            popItem.prev = null;
            this.tail = newTail;
        }
        this.length--;
        return popItem;
    }
}
var list = new DoublyLinkedList();
list.push("1");