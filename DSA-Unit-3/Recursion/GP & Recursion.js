function GP(N,R){

    if (N === 0){
        return 1
    } else {
        
        return (1/R**N) + GP((N-1),R)
    }
}


function runProgram(input){

    input = input.trim().split(" ").map(Number)
    var N = input[0]
    var R = input[1]
    var output = GP(N,R)
    var decimal = output.toFixed(4)
    console.log(decimal)

}
runProgram(`3 5`)