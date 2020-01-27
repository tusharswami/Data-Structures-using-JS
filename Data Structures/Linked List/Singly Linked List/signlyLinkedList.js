// Singly linked List is a Data Type of Linked List which can only be tranvered uni-directionally.
// Made up of Node, Contains
// Piece of Data        -> val
// Pointer to Next Node -> next

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// };

// class SinglyLinkedList{
//     constructor(){
//         this.head       =   null;
//         this.tail       =   null;
//         this.length     =   0;
//     }

//     push(val){
//         //Instanatiate a NewNode with parametrized value
//         //Check if List is Empty, 
//             // If Empty, Assisgn NewNode -> Head, Head -> Tail
//             // Else, NewNode -> tail.next & tail.next -> tail
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// var list = new SinglyLinkedList();
// list.push("Hello");

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
}
var list = new SinglyLinkedList();
list.push("Hello");