var arr = [];


function binary_search(array, value){
    before = new Date();
    sorted_array = array.sort();
    console.log(sorted_array);

    low = 0;
    high = array.length - 1;

    var mid = Math.ceil((low + high)/2)

    if(sorted_array[mid] == value){
        return mid;
    }
    else if(sorted_array[mid] < value){
        low = mid +1;
    }
    else if (sorted_array[mid] > value){
        high = mid - 1;
    }
    else return -1;

    var after = new Date();
    time = after.getMilliseconds() - before.getMilliseconds();
    document.getElementById("binaryTime").textContent = time;
    console.log(time);
}


function unorderedSearch(array, value){
    var before = new Date();
    var sorted_array = array.sort();
    console.log(sorted_array);
    for (var i = 0; i <= array.length; i ++){
        console.log(sorted_array[i]);
        
        if (sorted_array[i] == value){
            return i;
        }
    }
    var after = new Date();
    time = (after.getMilliseconds() - before.getMilliseconds())
    document.getElementById("unorderTime").textContent = time;
    console.log(time);
}

function orderedSearch(array, value){
    var before = new Date();
    for (var i = 0; i <= array.length; i ++){
        if (array[i] > value){
            return -1
        }else if (array[i] == value){
            return i;
        }
    }
    var after = new Date();
    time = (after.getMilliseconds() - before.getMilliseconds());
    document.getElementById("orderTime").textContent = time;
    console.log(time);
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
}
function binary(){
    binary = document.getElementById("binary").value;
    var value =  binary_search(arr, binary);
    document.getElementById("binaryAnswer").textContent = value;
    console.log(value);
}
function ordered(){
    order = document.getElementById("order").value;
    var value = orderedSearch(arr, order);
    document.getElementById("orderAnswer").textContent = value;
    console.log(value)

}
function unordered(){
    unorder = document.getElementById("unorder").value;
    var value = unorderedSearch(arr, unorder);
    document.getElementById("unorderAnswer").textContent = value;
    console.log(value)

}