function Queue(){

        var items = [];

    this.enqueue = function(element){
        items.push(element)
    };

    this.dequeue = function(){
        if(this.isEmpty())
            return "QUEUE IS EMPTY"
        return items.shift();
    };

    this.size = function(){
        return items.length;
    };

    this.front = function(){
        if(this.isEmpty())
            return "QUEUE IS EMPTY"
        return items[0]
    };

    this.isEmpty = function(){
        return items.length == 0
    };

    this.printQueue = function(){
        var str = ""
        for(var i =0; i < items.length; i++){
            str += items[i] + "  ||  " 
        }
        return str
    };
}

var queue =  new Queue();

function input(){
    number1 = document.getElementById("number1").value;
    queue.enqueue(number1)
    console.log(this.queue)
    document.getElementById("number1").value = "";

}

function enter(){
    var print = queue.printQueue()
    document.getElementById("printQueue").textContent = print
    console.log(queue.printQueue())
}

function empty(){
    var empty = queue.isEmpty()
    document.getElementById("emptyAnswer").textContent = empty
    console.log(this.queue.isEmpty())
}

function peek(){
    var peek = queue.front()
    document.getElementById("peekAnswer").textContent = peek
    console.log(this.queue.front())
}

function size(){
    var queueSize = queue.size()
    document.getElementById("sizeAnswer").textContent = queueSize
    console.log(this.queue.size())
}

function push(){
    pushQueue = document.getElementById("new").value;
    queue.enqueue(pushQueue)
    console.log(this.queue)
    document.getElementById("new").value = "";
}

function pop(){
    queue.dequeue()
    console.log(queue.dequeue())
    var print = queue.printQueue()
    document.getElementById("printQueue").textContent = print;
}