function NoOfWays(N){
    if(N === 1 || N === 0){
        return 1
    }
    if(N < 0 ){
        return 0
    } 
    else {
        console.log(N-1,N-3,N-5)
        return NoOfWays(N-1) + NoOfWays(N-3) + NoOfWays(N-5)
    }
}


function runProgram(input){
    input = Number(input)
    console.log(NoOfWays(input))
}
runProgram(`7`)