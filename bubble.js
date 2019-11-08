var arr = [];

function printA(array){
    var str = ""
    for(var i =0; i < array.length; i++){
        str += (array[i] + "  ||  ")
    }
    return str;
}

function bubble_Sort(arrayB) {
var swapped;
do{
    swapped = false;
    for(var i = 0; i<arrayB.length; i++){
        if(arrayB[i] && arrayB[i+1] && arrayB[i]>arrayB[i+1]){
            var temp = arrayB[i]
            arrayB[i] = arrayB[i+1];
            arrayB[i+1] = temp;
        }
    }
}while(swapped);

    return arrayB;
}


function InsertionSort(arrayI){
for(var i = 0; i<arrayI.length; i++){
    var temp = arrayI[i];
    var j = i-1;

    while(j>= 0 && arrayI[j]>temp){
        arrayI[j+1] = arrayI[j];
        j--;
    }
    arrayI[j+1] = temp;
}
    return arrayI;
}

function Quick_Sort(arrayQ){
    if(arrayQ.length <= 1){
        return arrayQ;
    }
    else{
        var left = [];
        var right = [];
        var newArray = [];
        var pivot   = arrayQ.pop();
        var length = arrayQ.length;

        for(var i = 0; i<length; i++){
            if(arrayQ[i] <= pivot){
                left.push(arrayQ[i]);
            }
            else{
                right.push(arrayQ[i]);
            }
        }
        quick = newArray.concat(Quick_Sort(left), pivot, Quick_Sort(right));
        return quick;
    }
}

function SelectionSort(arrayS){
for(var i = 0; i<arrayS.length; i++){
    var min = i;
    for(var j = i+1; j<arrayS.length; j++){
        if(arrayS[j] <arrayS[min]){
            min = j;
        }
    }
    if(i != min){
        var temp = arrayS[i]
            arrayS[i] = arrayS[min];
            arrayS[min] = temp;
    }
}
return arrayS;
}

function merger(left, right){
    const array_m = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            array_m.push(left.shift());
        }
        else{
            array_m.push(right.shift())
        }
    }
    return [...array_m, ...left, ...right];
}

function Merge_Sort(arrayM, half = (arrayM.length/2)){
    if(arrayM.length < 2){
        return arrayM;
    }

    const left = arrayM.splice(0, half);
    var marge =  merger (Merge_Sort(left), Merge_Sort(arrayM))
    return marge;
}



function enter(){
    number = document.getElementById("number").value;
    arr.push(number)
    console.log(arr)
    var print = printA(arr);
    document.getElementById("printArray").textContent = print
    console.log(print);
    document.getElementById("number").value = "";
}

function bubble(){
    var before = new Date();

    var bubble = bubble_Sort(arr.slice());
    document.getElementById("bubbleAnswer").textContent = printA(bubble);
    console.log(bubble);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("bubbleTime").textContent = time;
    console.log(time);
}

function selection(){
    var before = new Date();

    var select = SelectionSort(arr.slice())
    document.getElementById("selectAnswer").textContent = printA(select);
    console.log(select);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("selectTime").textContent = time;
    console.log(time);
}

function insertion(){
    var before = new Date();

    var insert = InsertionSort(arr.slice());
    document.getElementById("insertAnswer").textContent = printA(insert);
    console.log(insert);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("insertTime").textContent = time;
    console.log(time);
}

function quick(){
    var before = new Date();

    var quick = Quick_Sort(arr.slice())
    document.getElementById("quickAnswer").textContent = printA(quick);
    console.log(quick);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("quickTime").textContent = time;
    console.log(time);
}

function merge(){
    var before = new Date();

    var merge = Merge_Sort(arr.slice())
    document.getElementById("mergeAnswer").textContent = printA(merge);
    console.log(merge)

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("mergeTime").textContent = time;
    console.log(time);
}