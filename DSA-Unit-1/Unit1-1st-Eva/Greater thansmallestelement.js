function runProgram(input){
    input = input.split("\n")
    var testcase = Number(input[0])
    var line = 0
    
    for(var i=1; i<=testcase; i++){

        var N = input[i+line].split(" ").map(Number)
        var array = input[i+line+1].split(" ").map(Number)
        line += 1
        
        
        var output = ""
        for(var j=0; j<N; j++){

            if(array[j] === 1){
                output += array[j] + " "
            }else {
                output += -1 + " "
            }
        }
         console.log(output.trim(" "))
        
    }
}
runProgram(`2
3
1 3 2
5
3 2 2 1 1`)
