var arr = [];

function printA(array){
    var str = ""
    for(var i =0; i < array.length; i++){
        str += (array[i] + "  ||  ")
    }
    return str;
}

function bubble_Sort(arrayB) {
        this.swap = function(arrayB, index1, index2){
            var value1 = arrayB[index1]
            arrayB[index1] = arrayB[index2]
            arrayB[index2] = value1
        }
        this.bubbleSort = function(){
            for (var i in [...arrayB.keys()].slice(1, arrayB.length)){ // to run n-1 times
                for (var i = 0; i < arrayB.length; i++){
                    // console.log(i)
                    try{
                        if (arrayB[i] > arrayB[(i + 1)]){
                            swap(arrayB, i, i + 1)
                        }
                    }
                    catch(er){
                        
                    }
                }
            }
            console.log("new array: ", arrayB)
            return arrayB;
        }
    }


function InsertionSort(arrayI){

	this.sort = function(){
		var n = arrayI.length
	    for (var index = 1; index < n; index ++){
	        var tmp = arrayI[index]
	        var j = index
	        while (j>0 && tmp < arrayI[j-1]){
	            arrayI[j] = arrayI[j - 1]
	            j = j - 1
	        }
            arrayI[j] = tmp
	    }
	    return arrayI;
	}
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

function SelectionSort(){
	this.swap = function(array, index1, index2){
	    var value1 = array[index1]
	    array[index1] = array[index2]
	    array[index2] = value1
	}
    
    this.sort = function(arrayS){
		var array_size = arrayS.length
	    for (var index = 0; index < array_size; index ++){
	        this.swap(
	        	arrayS, 
	        	arrayS.indexOf(
	        		Math.min(...arrayS.slice(index, array_size))
        		),
        		index
	        )
    	}
        return arrayS;
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

    var BubbleSort = new bubble_Sort(arr)
    var bubble = BubbleSort.bubbleSort(arr);
    document.getElementById("bubbleAnswer").textContent = printA(bubble);
    console.log(bubble);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("bubbleTime").textContent = time;
    console.log(time);
}

function selection(){
    var before = new Date();

    var selectionSort = new SelectionSort();
    var select = selectionSort.sort(arr)
    document.getElementById("selectAnswer").textContent = printA(select);
    console.log(select);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("selectTime").textContent = time;
    console.log(time);
}

function insertion(){
    var before = new Date();

    var insertionSort = new InsertionSort(arr);
    var insert = insertionSort.sort(arr);
    document.getElementById("insertAnswer").textContent = printA(insert);
    console.log(insert);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("insertTime").textContent = time;
    console.log(time);
}

function quick(){
    var before = new Date();

    var quick = Quick_Sort(arr)
    document.getElementById("quickAnswer").textContent = printA(quick);
    console.log(quick);

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("quickTime").textContent = time;
    console.log(time);
}

function merge(){
    var before = new Date();

    var merge = Merge_Sort(arr)
    document.getElementById("mergeAnswer").textContent = printA(merge);
    console.log(merge)

    var after = new Date();
    var time = (after.getMilliseconds()- before.getMilliseconds());
    document.getElementById("mergeTime").textContent = time;
    console.log(time);
}