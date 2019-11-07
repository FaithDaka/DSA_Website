var arr = [];

function swap(array, first_Index, second_Index){
    var temp = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = temp;
}

function printA(array){
    var str = ""
    for(var i =0; i < array.length; i++){
        str += (array[i] + "  ||  ")
    }
    return str;
}

function bubble_Sort(arrayB){
    var before = new Date();
    var len = arrayB.length,
        i, j, stop

    for (i= 0; i<len; i++){
        for(j=0, stop = len-i; j<stop; j++){
            if (arrayB[j] > arrayB[j+1]){
                swap(arrayB, j, j+1);
            }
        }
    }

    bubble = arrayB
    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("bubbleTime").textContent = time;
    console.log(time);
    return bubble;
}

function Selection_Sort(arrayS){

    var len = arrayS.length , min;
    var before =new Date();
        for(var i=0; i<len; i++){
            min = i;
        }

        for(var j = i+1; j<len; j++){
            if(arrayS[j] < arrayS[min]){
                min = j;
            }
        }

        if(min != i){
            swap(arrayS, i, min);
        }

        selection = arrayS;
        var after = new Date();
        time = (after.getMilliseconds() - before.getMilliseconds());
        document.getElementById("selectTime").textContent = time;
        console.log(time);
        return selection;
}

function Insertion_Sort(arrayI){
    before = new Date();
    for(var i = 1; i<arrayI.length; i++){
        if(arrayI[i] < arrayI[0]){
            arrayI.unshift(arrayI.splice(i,1)[0]);
        }
        else if(arrayI[i] >arrayI[i-1]){
            continue;
        }
        else{
            for(var j = 1; j<i; j++){
                if(arrayI[i] >arrayI[j-1] && arrayI[i]<arrayI[j]){
                    arrayI.splice(j , 0 ,arrayI.splice(i, 1)[0]);
                }
            }
        }
    }

    insertion = arrayI;
    after = new Date();
    time = (after.getMilliseconds() - before.getMilliseconds());
    document.getElementById("insertTime").textContent = time;
    console.log(time);
    return insertion;
}

function Quick_Sort(arrayQ){
    before = new Date();
    if(arrayQ.length <= 1){
        return arrayQ;
    }
    else{
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = arrayQ.pop();
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
        after = new Date();
        time = (after.getMilliseconds() - before.getMilliseconds());
        document.getElementById("quickTime").textContent = time;
        console.log(time);
        return quick;
    }
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
    var before = new Date();
    if(arrayM.length < 2){
        return arrayM;
    }

    const left = arrayM.splice(0, half);
    var marge =  merger (Merge_Sort(left), Merge_Sort(arrayM))
    var after = new Date();
    time = (after.getMilliseconds() - before.getMilliseconds());
    document.getElementById("mergeTime").textContent = time;
    console.log(time);
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
    var bubble = bubble_Sort(this.arr)
    document.getElementById("bubbleAnswer").textContent = printA(bubble);
    console.log(bubble)
}

function selection(){
    var select = Selection_Sort(this.arr)
    document.getElementById("selectAnswer").textContent = printA(select);
    console.log(select)
}

function insertion(){
    var insert = Insertion_Sort(this.arr)
    document.getElementById("insertAnswer").textContent = printA(insert);
    console.log(insert)
}

function quick(){
    var quick = Quick_Sort(this.arr)
    document.getElementById("quickAnswer").textContent = printA(quick);
    console.log(quick)
}

function merge(){
    var merge = Merge_Sort(this.arr)
    document.getElementById("mergeAnswer").textContent = printA(merge);
    console.log(merge)
}