function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var line = 1
    for(var i=0 ; i<N; i++){

        var n = input[i+line].split(" ").map(Number)
        var arr = input[i+1+line].split(" ").map(Number)
        line +=1
       console.log(n[1])
       
    }

    
    
}
runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`)


