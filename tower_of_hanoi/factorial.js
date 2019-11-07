function fib(value){
    if(value <= 1){
        return value
    }
    else
    return fib(value-1)+fib(value-2)
}

function fact(num){
    if(num==1){
        return num
    }
    else if(num<1){
        return 0
    }
    else
        return num*fact(num-1)
}

let factListener = document.querySelector("#factButton")

factListener.onclick = function (){
    factorial = document.getElementById("factNo").value;
    document.getElementById("factNo").value = "";
    var answer = fact(factorial)
    document.getElementById("factAnswer").textContent = answer
    console.log(factorial)
}

let fibListener = document.querySelector("#fibButton")

fibListener.onclick = function (){
    fibonacci = document.getElementById("fibNo").value;
    document.getElementById("fibNo").value = "";
    var input = fib(fibonacci)
    document.getElementById("fibAnswer").textContent = input
    console.log(fibonacci)
}

