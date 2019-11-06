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

    number2 = document.getElementById("number2").value;
    list.add(number2)
    console.log(this.list)

    number3 = document.getElementById("number3").value;
    list.add(number3)
    console.log(this.list)

    number4 = document.getElementById("number4").value;
    list.add(number4)
    console.log(this.list)

}

function enter(){
    var print = list.printList()
    document.getElementById("printList").textContent = print
    console.log(print);
}
function addBegin(){
    begin = document.getElementById("begin").value;
    list.insertAt(begin, 0);
    console.log(this.list);              
}
function addAt(){
    insert = document.getElementById("number").value;
    index = document.getElementById("index").value;
    list.insertAt(insert, index);
    console.log(this.list);

}
function addEnd(){
    end = document.getElementById("end").value;
    list.add(end);
    console.log(this.list);

}
function removeBegin(){
    list.removeFrom(0);
    console.log(this.list); 

}
function removeAt(){
    remove = document.getElementById("rIndex").value;
    list.removeFrom(remove);
    console.log(this.list);

}
function removeEnd(){
    list.removeFrom(this.size - 1);
    console.log(this.list);

}


function NodeDL(element, next, prev){
        this.element = element
        this.next = null
        this.prev = null

        this.get_element = function(){
            return this.element
        }
        
        this.get_next = function(){
            return next
        }
    
        this.get_prev = function(){
            return prev
        }
        
        this.set_element = function(new_element){
            this.element = new_element
        }
            
        this.set_next = function(new_next){
            this.next = new_next
        }
    
        this.set_prev = function(new_prev){
            this.prev = new_prev
        }
};

function linkedListDL(){
        this.head = null
        this.tail = null
        this.size = 0

    this.add = function(element)
    {
        var node = new NodeDL(element, null, null)
        //to store current node
        var current
        if(this.head == null){
            this.head = node
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node 
        }
        this.size++;
    }

    this.insertAt = function(element, index)
    {
        let current = this.head
        counter = 1
        let node = new NodeDL(index)

        if(element == 0){
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        else{
            while(current){
                current = current.next
                if(counter = element){
                    node.prev = current.prev
                    current.prev.next = node
                    node.next = current
                    current.prev = node
                }
                counter++
            }
        }
    };

    this.removeFrom = function(index){
        let current = this.head
        while(current){
            if(current.data === index){
                if(current == this.head && current == this.tail){
                    this.head = null;
                    this.tail = null;
                }
                else if(current == this.head){
                    this.head = this.head.next;
                    this.head.prev = null;
                }
                else if(current == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
    };

    this.removeElement = function(element) 
    { 
        var current = this.head; 
        var counter = 1;

        if(element == 0){
            this.head = this.head.next;
            this.head.prev = null;
        }
        else{
            while(current){
                current = current.next;
                if(current == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else if(counter == element){
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                counter++
            }
        }
    };

    this.printList = function() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " --> "; 
            curr = curr.next; 
            if(curr == null){
                str+= (curr + " --|");
            }
        } 
        console.log(str); 
    };
}

var listDL = new linkedListDL()


function input(){
    number1 = document.getElementById("number1").value;
    listDL.add(number1)
    console.log(this.listDL)

    number2 = document.getElementById("number2").value;
    listDL.add(number2)
    console.log(this.listDL)

    number3 = document.getElementById("number3").value;
    listDL.add(number3)
    console.log(this.listDL)

    number4 = document.getElementById("number4").value;
    listDL.add(number4)
    console.log(this.listDL)

}

function enter(){
    var print = listDL.printList()
    document.getElementById("printList").textContent = print
    console.log(print);
}
function addBegin(){
    begin = document.getElementById("begin").value;
    listDL.insertAt(begin, 0);
    console.log(this.listDL);              
}
function addAt(){
    insert = document.getElementById("number").value;
    index = document.getElementById("index").value;
    listDL.insertAt(insert, index);
    console.log(this.listDL);

}
function addEnd(){
    end = document.getElementById("end").value;
    listDL.add(end);
    console.log(this.listDL);

}
function removeBegin(){
    listDL.removeFrom(0);
    console.log(this.listDL); 

}
function removeAt(){
    remove = document.getElementById("rIndex").value;
    listDL.removeFrom(remove);
    console.log(this.listDL);

}
function removeEnd(){
    listDL.removeFrom(this.size - 1);
    console.log(this.listDL);

}