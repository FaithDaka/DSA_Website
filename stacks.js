function Stack() {

    var items = [];
    this.top = 0;

    this.push = function(element){
        items.push(element);
    };
 
    this.popElement = function(){
         popped =  items.pop();
         return popped;
    };
 
    this.peek = function(){
        return items[items.length-1];
    };
 
    this.isEmpty = function(){
        return items.length == 0;
    };
 
    this.size = function(){
        return items.length;
    };
 
    this.print = function(){
        var str = ""
        for(var i =0; i < items.length; i++){
            str += items[i] + "  ||  " 
        }
        return str
    };
 }

var stack = new Stack();


function input(){
    number1 = document.getElementById("number1").value;
    stack.push(number1)
    console.log(this.stack)
    document.getElementById("number1").value = "";

}

function enter(){
    var print = stack.print()
    document.getElementById("printStack").textContent = print
    console.log(stack.print())
}

function empty(){
    var empty = stack.isEmpty()
    document.getElementById("emptyAnswer").textContent = empty
    console.log(this.stack.isEmpty())
}

function peek(){
    var peek = stack.peek()
    document.getElementById("peekAnswer").textContent = peek
    console.log(this.stack.peek())
}

function size(){
    var stackSize = stack.size()
    document.getElementById("sizeAnswer").textContent = stackSize
    console.log(this.stack.size())
}

function pop(){
    stack.popElement()
    console.log(this.stack.popElement())
    var print = stack.print()
    document.getElementById("printStack").textContent = print;
}

function push(){
    pushStack = document.getElementById("new").value;
    stack.push(pushStack)
    console.log(this.stack)
    document.getElementById("new").value = "";
}



