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
    shift(){
        if(!this.head) return undefined;
        var shiftedNode;
        if(this.length === 1){
            shiftedNode = this.head;
            this.head = null;
            this.tail = null;
        }else{
            shiftedNode = this.head;
            this.head = this.head.next;
            shiftedNode.next = null;
            this.head.prev = null;
        }
        this.length--;
        return shiftedNode;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            
        }
        this.length++;
        return this;
    }
    get(index){
        var count, current;
        if(index < 0 || index >= this.length) return null;
        if(index < this.length/2){
            count = 0;
            current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        }else{
            count = this.length -1;
            current = this.tail;
            while(count != index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
}
var list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
list.push("7");
list.push("8");
list.push("9");

