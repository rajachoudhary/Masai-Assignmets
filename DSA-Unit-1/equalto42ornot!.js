function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var n = input[1].split(" ").map(Number)
    var count = 0
    for(var i=0; i<N; i++){

        if(n[i] === 42){
            count++
        }
    }

    if(count >= 1){
        console.log("Yes")
    }
    else {
        console.log("No")
    }

}
runProgram(`5
3 7 0 9 8`)