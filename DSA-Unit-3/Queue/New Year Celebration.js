function runProgram(input){

    input = input.trim().split("\n")
    var N = Number(input[0])
    var icecreamQueue = []
    var drinkStack = []
    for(var i = 1; i <= N; i++){

        var party = input[i].split(" ")
        var output = []
        if(party[0] === "1"){
            icecreamQueue.push(party[1])
        } else if (party[0] === "2"){
            drinkStack.push(party[1])
        } else if (party[0] === "3"){
            if(icecreamQueue.length>0){
                output.push(icecreamQueue[0])
                console.log(output.join(" "))
            } else {
                console.log(-1)
            }
        } else if (party[0] === "4"){
            if(drinkStack.length > 0){
                output.push(drinkStack[drinkStack.length-1])
                console.log(output.join(" "))
            } else {
                console.log(-1)
            }
            
        } else if (party[0] === "5"){
            drinkStack.push(icecreamQueue[0])
            icecreamQueue.shift()
        }
    }
}
runProgram(`7
1 4
2 3
1 2
3
4
5
4`)