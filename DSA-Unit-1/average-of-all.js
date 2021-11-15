function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var n = input[1].split(" ").map(Number)
    var sum = 0
    for(var i = 0; i < N; i++){
        
        sum += n[i]
    }
    var avg = sum / N
    
    console.log(sum/N)
}
runProgram(`4
2 5 0 9`)