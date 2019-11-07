function Node(element, next){

        this.element = element;
        this.next = null;

    this.get_element = function(){
        return this.element
    }

    this.get_next = function (){
        return next;
    }

    this.set_element = function(new_element){
        this.element = new_element;
    }

    this.set_next = function(new_next){
        this.next = new_next;
    }
};


function SinglylinkedList(){

        this.head = null;
        this.size = 0;

    this.add = function(element)
    {
        var node = new Node(element)
        //to store current node
        var current
        if(this.head == null)
            this.head = node
        else{
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node 
        }
        this.size++;
    };

    this.insertAt = function(element, index)
    {
        next = null;
        if(index >0 && index>this.size)
            return false
        else{
            var node = new Node(element, next), prev;
            var curr = prev 
            curr = this.head;

            if(index==0){
                node.next = this.head;
                this.head = node;
            }
            else{
                curr = this.head;
                var it = 0

                while(it <index){
                    it++
                    prev = curr 
                    curr = curr.next 
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    };

    this.removeFrom = function(index){
        if(index>0 && index > this.size)
            return -1
        else{
            var curr, prev, it = 0
            curr = this.head;
            prev = curr;

            if(index === 0){
                this.head = curr.next 
            }
            else{
                while(it < index){
                    it++
                    prev = curr
                    curr = curr.next
                 }
                prev.next = curr.next; 
            }
            this.size--;
                //return thr removed element
            return curr.element
        }
    };


    this.indexOf = function(element) 
    { 
        var count = 0; 
        var current = this.head; 
  
        while (current != null) { 
            if (current.element === element) 
                return count; 
        count++; 
        current = current.next; 
        } 
  
        return -1; 
    };
    
    this.printList = function() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += (curr.element + " --> "); 
            curr = curr.next; 
            if(curr == null){
                str+= (curr + " --|");
            }
        } 
        return str
    };
}


var list = new SinglylinkedList();
function input(){
    number1 = document.getElementById("number1").value;
    list.add(number1)
    console.log(this.list)

}

function enter(){
    document.getElementById("number1").value = "";
    var print = list.printList()
    document.getElementById("printList").textContent = print
    console.log(print);
}
function addBegin(){
    begin = document.getElementById("begin").value;
    list.insertAt(begin, 0);
    document.getElementById("begin").value = "";
    console.log(this.list);              
}
function addAt(){
    insert = document.getElementById("number").value;
    index = document.getElementById("index").value;
    document.getElementById("number").value = "";
    document.getElementById("index").value = "";
    list.insertAt(insert, index);
    console.log(this.list);

}
function addEnd(){
    end = document.getElementById("end").value;
    document.getElementById("end").value = "";
    list.add(end);
    console.log(this.list);

}
function removeBegin(){
    list.removeFrom(0);
    console.log(this.list); 

}
function removeAt(){
    remove = document.getElementById("rIndex").value;
    document.getElementById("rIndex").value = "";
    list.removeFrom(remove);
    console.log(this.list);

}
function removeEnd(){
    list.removeFrom(this.size - 1);
    console.log(this.list);

}


