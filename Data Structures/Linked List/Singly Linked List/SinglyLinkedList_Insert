// Singly linked List is a Data Type of Linked List which can only be tranvered uni-directionally.
// Made up of Node, Contains
// Piece of Data        -> val
// Pointer to Next Node -> next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = this.head;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.
        length++;
        return this;
    }
    pop(){
        //If nothing exists, return undefined;
        //else Initialize two variables to track NewTail and Current Pointer
        //Loop through the List, until current.next(Current Pointer) is not Null;
        //Set newTail to current Pointer & current ot the next value to the current pointer
        //Replace tail with the newTail
        //Assign Current pointer with its next value
        //Decrement Length
        //if length of list is 0 || head === tail, then
        //Assign head and tail to null;
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
    shift(){
        //Remove One Node from the start
        //if list is empty, return undefined
        //assign head -> temp
        //head.next -> head
        //temp.next -> null;
        if(!this.head) return undefined;
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(index != counter){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value){
        if(index < 0 || index >= this.length) return "Invalid Index";
        var counter = 0;
        var current = this.head;
        while(index != counter){
            current = current.next;
            counter++
        }
        current.val = value;
        return this;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
             this.push(value);
             return "x";
        }
        if(index === 0){
            this.unshift(value);
            return "y";
        }else{
            var newNode = new Node(value);
            newNode.next = this.get(index);
            this.get(index-1).next = newNode;
            this.length++;
            return "z";
        }
        
    }
}
var list = new SinglyLinkedList();
list.push(1);