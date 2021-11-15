function runProgram(input){
    input = input.split("\n")
    var testCase = Number(input[0])
    var line = 1

    for(var i=0; i<testCase; i++){

        var NR = input[i+line].split(" ").map(Number)
        var N = input[i+line+1].split(" ").map(Number)
        line += 1
        
        var no = 0
        var count = 0

        for(var j=0; j<NR[0]; j++){

            if(N[j] > no){
                no = N[j]
                count++
            }
        }
        console.log(count*NR[1])
    }

}
runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`)