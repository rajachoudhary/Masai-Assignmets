function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var n = input[1].split(" ").map(Number) 
    var sum = 0

    for(var i=0; i<N; i+=2){

        sum += n[i]
    }
    console.log()
}
runProgram(`7
4 5 5 5 6 6 7`)