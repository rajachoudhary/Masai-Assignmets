function noOfWays(arr,N,K){
    if(N === 0 || N===1){
        return 0
    }
    else {
        return noOfWays()
    }
}



function runProgram(input){
    input = input.trim(" ").split("\n")
    var KN = input[0].split(" ").map(Number)
    var N  = KN[0]
    var K = KN[1]
    var arr = input[1].split(" ").map(Number)
    noOfWays(arr,N,K)
}
runProgram(`3 3
1 2 3`)