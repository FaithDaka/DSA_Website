var arr = [];


function binary_search(array, low, high, value){
    var mid = Math.ceil((low + high)/2)
    if (low > high){
        return -1
    }
    if (value == array[mid]){
        return mid
    }else if (value < array[mid]){
        return binary_search(array, low, mid - 1, value)
    }
    else{
        return binary_search(array, mid + 1, high, value)
    }
}

function unorderedSearch(array, value){
    for (var i = 0; i <= array.length; i ++){
        console.log(array[i]);
        
        if (array[i] == value){
            return i;
        }
    }
}

function orderedSearch(array, value){
    for (var i = 0; i <= array.length; i ++){
        if (array[i] > value){
            return -1
        }else if (array[i] == value){
            return i;
        }
    }
}

function printA(array){
    var str = ""
    for(var i =0; i < array.length; i++){
        str += (array[i] + "  ||  ")
    }
    return str;
}


function enter(){
    number = document.getElementById("number").value;
    arr.push(number);
    print = printA(arr);
    document.getElementById("printArray").textContent = print
    console.log(print);
    document.getElementById("number").value = "";
}

function sort(){
    printSorted = printA(arr.sort());
    document.getElementById("printSorted").textContent = printSorted;
}

function binary(){
    var before = new Date();

    binary = document.getElementById("binary").value;
    document.getElementById("binary").value = "";

    var value =  binary_search(arr.sort(),0, (arr.length -1), binary);
    document.getElementById("binaryAnswer").textContent = value;
    console.log(value);

    var after = new Date();
    time = after.getMilliseconds() - before.getMilliseconds();
    document.getElementById("binaryTime").textContent = time;
    console.log(time);
}
function ordered(){
    var before = new Date();

    order = document.getElementById("order").value;
    document.getElementById("order").value = "";
    var value = orderedSearch(arr.sort(), order);
    document.getElementById("orderAnswer").textContent = value;
    console.log(value);

    var after = new Date();
    time = after.getMilliseconds() - before.getMilliseconds();
    document.getElementById("orderTime").textContent = time;
    console.log(time);

}
function unordered(){
    var before = new Date();
    
    unorder = document.getElementById("unorder").value;
    document.getElementById("unorder").value = "";
    var value = unorderedSearch(arr.sort(), unorder);
    document.getElementById("unorderAnswer").textContent = value;
    console.log(value);

    var after = new Date();
    time = after.getMilliseconds() - before.getMilliseconds();
    document.getElementById("unorderTime").textContent = time;
    console.log(time);

}