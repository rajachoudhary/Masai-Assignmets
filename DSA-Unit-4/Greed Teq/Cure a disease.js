function runProgram(input){

    input = input.trim(" ").split("\n")
    let N = Number(input[0])
    let strOfVacc = input[1].split(" ").map(Number)
    let MidchCount = input[2].split(" ").map(Number)
    strOfVacc.sort((a,b)=>a-b)
    MidchCount.sort((a,b)=>a-b)
    let count = 0
    for(var i=0; i<N; i++){

        if(strOfVacc[i] < MidchCount[i]){
            count++
            break
        } 
    }
    if(count > 0){
        console.log("No")
    } else {
        console.log("Yes")
    }
}
runProgram(`5
123 146 454 542 456
100 328 248 689 200`)