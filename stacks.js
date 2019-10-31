function Stack() {

    var items = [];

    this.push = function(element){
        items.push(element);
    };
 
    this.popElement = function(){
        // if((items.length - 1) >= 0){
        //     poppedItem = items[items.length-1]
        //     // items[items.length - 1] = undefined
        //     items.length -= 1
        // return poppedItem , items;
        // }
        return items.pop(items.length-1);
        // return null;
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

    number2 = document.getElementById("number2").value;
    stack.push(number2)
    console.log(this.stack)

    number3 = document.getElementById("number3").value;
    stack.push(number3)
    console.log(this.stack)

    number4 = document.getElementById("number4").value;
    stack.push(number4)
    console.log(this.stack)

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
}

function push(){
    pushStack = document.getElementById("new").value;
    stack.push(pushStack)
    console.log(this.stack)
}



