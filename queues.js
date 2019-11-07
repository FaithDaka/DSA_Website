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

function circularQueue() {
    var items = [];
    this.front = -1
    this.rear = -1
    this.count = 0
    this.size = items.length;
    this.queueArray = new Array(size).fill(null)
    this.isEmpty = function () {
        if (this.front == -1 && this.rear == -1) {
            return true
        } else {
            return false
        }
    }
    this.enqueue = function (item) {
        if ((this.count + 1) <= this.size) {
            if (this.isEmpty()) {
                this.front = this.rear = 0
                this.queueArray[this.rear] = item
                this.count++
            } else {
                this.rear = (this.rear + 1) % this.queueArray.length
                this.queueArray[this.rear] = item
                this.count++
            }
        } else {
            return "stack overflow"
        }
    }
    this.dequeue = function () {
        if (this.isEmpty()) {
            return false
        }
        
        this.queueArray[this.front] = null
        this.front = (this.front + 1) % this.queueArray.length // getting current
        this.count--

        if (this.count == 0) {
            this.front = this.rear = -1
        }
    }
    this.queueElements = function () {
        return this.queueArray
    }
    this.queueSize = function () {
        return this.count
    }
    this.isFull = function () {
        return (this.count + 1) > this.size
    }
}

var cqueue = new circularQueue();
