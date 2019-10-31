$(document).ready(function(){
    var towers = [
        [[], $(".line1")],
        [[], $(".line2")],
        [[], $(".line3")],
    ];
    var moves = 0, discs = null, hold = null;
    function clear() {
        towers[0][1].empty();
        towers[1][1].empty();
        towers[2][1].empty();
    }

    function drawdiscs() {
        console.log("Drawing disks");
        clear();
        for(var i = 0; i < 3; i++){
            console.log("In for loop");
            // if (!jQuery.isEmptyObject(towers[i][0])){
                console.log("In if");
                for (var j = 0; j < towers[i][0].length; j++){
                    console.log("appending")
                    towers[i][1].append(
                        $(
                            "<li id='disc" +
                            towers[i][0][j] +
                            "' value='"+
                            towers[i][0][j] +
                            "'></li>"
                        )
                    );
                }
            // }
        }
    }

    function init() {
        clear();
        towers = [
            [[], $(".line1")],
            [[], $(".line2")],
            [[], $(".line3")],
        ];
        discs = document.getElementById("box").nodeValue;
        moves = 0;
        hold = null;
        for(var i = discs; i > 0; i--)towers[0][0].push(i);
        drawdiscs();
        $('.moves').text(moves + "moves");
    }

    function handle(tower) {
        if (hold == null){
            if (!jQuery.isEmptyObject(towers[tower][0])){
                hold = tower;
                towers[hold][1]
                .children()
                .last()
                .css("margin-top", "-170px");
            }
        } else {
            var move = moveDisk(hold, tower);
            moves += 1;
            $(".moves").text(moves + " moves");
            if (move == 1){
                drawdiscs();
            }else{
                alert("You cant do the move")
            }
            hold = null;
        }
        if (solved()) $(".moves").text("Solved");
    }

    function moveDisk(a, b){
        var from = towers[a][0];
        var to = towers[b][0];
        if (from.length === 0) return 0;
        else if (to.length === 0){
            to.push(from.pop());
            return 1;
        }else if(from[from.length - 1] > to[to.length-1]){
            return 0;
        }else {
            to.push(from.pop());
            return 1;
        }
    }

    function solved(params) {
        if (
            jQuery.isEmptyObject(towers[0][0]) &&
            jQuery.isEmptyObject(towers[1][0]) &&
            towers[2][0].length == discs
        )
        return 1;
        else return 0;
    }

    $(".t").click(function(){
        handle($(this).attr("value"));
        console.log("Clicked !!");
    })

    $("#restart").click(function(){
        var disks = document.getElementById("box").value;
        init();
    })

    init();
    
}
)



var poppedListLength;
        var pushedListLength;
        var poppedListId;
        var pushedListId;
        console.log(movesList[i][0]);

        // POPPING
        if (movesList[i][0] == 0) {
            poppedItem = startList.pop();
            poppedListLength = startList.length;
            console.log("length", poppedListLength);
            poppedListId = 1;
        } else if (movesList[i][0] == 1) {
            poppedItem = auxList.pop();
            poppedListLength = auxList.length;
            console.log("length2", poppedListLength);
            poppedListId = 2;
        } else if (movesList[i][0] == 2) {
            poppedItem = destList.pop();
            poppedListLength = destList.length;
            console.log("length3", poppedListLength);
            poppedListId = 3;
        }
        // update the rings

        console.log("popped length", poppedListLength)
        
        
        if (movesList[i][0] == 0) {
            startBarItems = startBarItems + startList[i];
            console.log("startBarItems", startBarItems)
            console.log("move", movesList[i][0])
        } else if (movesList[i][0] == 1) {
            auxBarItems = auxBarItems + auxList[i];
            console.log("auxBarItems", auxBarItems)
            console.log("move", movesList[i][0])
        } else if (movesList[i][0] == 2) {
            destBarItems = destBarItems + destList[i];
            console.log("destItems", destBarItems)
            console.log("move", movesList[i][0])
        }

        setTimeout(function () {
            if (poppedListId = 1){
                document.getElementById("l"+poppedListId).innerHTML = startBarItems;
            }else if (poppedListId = 2){
                document.getElementById("l"+poppedListId).innerHTML = auxBarItems;
            }else if (poppedListId = 3){
                document.getElementById("l"+poppedListId).innerHTML = destBarItems;
            }
        }, 2000);


        //     // PUSHING
        //     if (movesList[i][0] == 0){
        //         startList.push(poppedItem);
        //         pushedListLength = startList.length;
        //         pushedListId = 1;
        //     }else if (movesList[i][0] == 1){
        //         auxList.push(poppedItem);
        //         pushedListLength = auxList.length;
        //         pushedListId = 2;
        //     }else if (movesList[i][0] == 2){
        //         destList.push(poppedItem);
        //         pushedListLength = destList.length;
        //         pushedListId = 3;
        //     }
        //     // update the rings
        //     for (var i = 0; i < pushedListLength; i++) {
        //         console.log("Looping");
        //         if (movesList[i][0] == 0){
        //             startBarItems = startBarItems + startList[i];
        //         }else if (movesList[i][0] == 1){
        //             auxBarItems = auxBarItems + auxList[i];
        //         }else if (movesList[i][0] == 2){
        //             destBarItems = destBarItems + destList[i];
        //         }
        //     }

        //     setTimeout(function () {
        //         if (pushedListId = 1){
        //             document.getElementById("l"+pushedListId).innerHTML = startBarItems;
        //         }else if (pushedListId = 2){
        //             document.getElementById("l"+pushedListId).innerHTML = auxBarItems;
        //         }else if (pushedListId = 3){
        //             document.getElementById("l"+pushedListId).innerHTML = destBarItems;
        //         }
        //     }, 2000);














        var discs;
var sourceBar;
var auxBar;
var destBar;
var moves_list = [];

$("#start").click(function () {
    disks = document.getElementById("discnoBox").value;
    sourceBar = document.getElementById("startBox").value;
    auxBar = document.getElementById("auxBox").value;
    destBar = document.getElementById("destBox").value;
    discs = disks;

    toh(disks, sourceBar, auxBar, destBar);

    start();

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toh(disks, source, aux, dest) {
    if (disks > 0) {
        toh(disks - 1, source, dest, aux)
        moves_list.push([source, dest])
        toh(disks - 1, aux, source, dest)
    }
}

async function start() {
    var source = sourceBar, aux = auxBar, dest = destBar, disks = discs;
    var startBar;
    var startBarItems = "";
    var auxBarItems = "";
    var destBarItems = "";
    var movesList = moves_list;
    var barObj = {};
    var startList = [];
    var auxList = [];
    var destList = [];

    var srcAuxDestList = [source, aux, dest];
    console.log(srcAuxDestList);

    for (var s = 0; s < 3; s++) {
        if (s == 0) {
            barObj[srcAuxDestList[s]] = startList;
        }else if(s == 1) {
            barObj[srcAuxDestList[s]] = auxList;
        }else if(s == 2) {
            barObj[srcAuxDestList[s]] = destList;
        }
    }

    // barObj[source].push(1);
    console.log(barObj);

    var newDiskList = [];
    for (var i = 0; i < disks; i++) {
        newDiskList.push("<li id='disc" + (i + 1) + "' value='1'></li>");
    }
    newDiskList.reverse();
    for (var i = 0; i < disks; i++) {
        barObj[source].push(newDiskList[i]);
    }

    if (source == 0) {
        startBar = 1;
    } else if (source == 1) {
        startBar = 2;
    } else if (source == 2) {
        startBar = 3;
    }
    for (var i = 0; i < startList.length; i++) {
        startBarItems = startBarItems + barObj[source][i];
    }

    document.getElementById("l" + startBar).innerHTML = startBarItems;

    await sleep(1000)

    for (i = 0; i < movesList.length; i++) {
        var poppedListLength;
        var pushedListLength;
        var poppedListId;
        var pushedListId;

        // POPPING
        if (movesList[i][0] == 0) {
            poppedItem = barObj[0].pop();
            poppedListLength = barObj[0].length;
            startBarItems = ""
            poppedListId = 1;
        } else if (movesList[i][0] == 1) {
            poppedItem = barObj[aux].pop();
            poppedListLength = barObj[aux].length;
            auxBarItems = ""
            poppedListId = 2;
        } else if (movesList[i][0] == 2) {
            poppedItem = barObj[dest].pop();
            poppedListLength = barObj[dest].length;
            destBarItems = ""
            poppedListId = 3;
        }

        for (var n = 0; n < poppedListLength; n++) {
            if (movesList[i][0] == 0) {
                startBarItems = startBarItems + barObj[source][n];
            } else if (movesList[i][0] == 1) {
                auxBarItems = auxBarItems + barObj[aux][n];
            } else if (movesList[i][0] == 2) {
                destBarItems = destBarItems + barObj[dest][n];
            }
        }

        await sleep(1000)
        // PUSHING
        if (movesList[i][1] == 0) {
            barObj[source].push(poppedItem);
            pushedListLength = barObj[source].length;
            pushedListId = 1;
            startBarItems = ""
        } else if (movesList[i][1] == 1) {
            barObj[aux].push(poppedItem);
            pushedListLength = barObj[aux].length;
            pushedListId = 2;
            auxBarItems = ""
        } else if (movesList[i][1] == 2) {
            barObj[dest].push(poppedItem);
            pushedListLength = barObj[dest].length;
            pushedListId = 3;
            destBarItems = ""
        }
        // update the rings
        for (var m = 0; m < pushedListLength; m++) {
            if (pushedListId == 1) {
                startBarItems = startBarItems + barObj[source][m];
            } else if (pushedListId == 2) {
                auxBarItems = auxBarItems + barObj[aux][m];
            } else if (pushedListId == 3) {
                destBarItems = destBarItems + barObj[dest][m];
            }
        }

        if (poppedListId == 1) {
            document.getElementById("l" + poppedListId).innerHTML = startBarItems;
        } else if (poppedListId == 2) {
            document.getElementById("l" + poppedListId).innerHTML = auxBarItems;
        } else if (poppedListId == 3) {
            document.getElementById("l" + poppedListId).innerHTML = destBarItems;
        }

        if (pushedListId == 1) {
            document.getElementById("l" + pushedListId).innerHTML = startBarItems;
        } else if (pushedListId == 2) {
            document.getElementById("l" + pushedListId).innerHTML = auxBarItems;
        } else if (pushedListId == 3) {
            document.getElementById("l" + pushedListId).innerHTML = destBarItems;
        }
    }
}

