function runProgram(input){
    input = input.split("\n")
    var testCase = Number(input[0])
    var line = 1

    for(var i=0; i<testCase; i++){
        
        var N = Number(input[i + line])
        var n = input[i+line+1].split(" ").map(Number)
        
        var count = 0
        
        for(var j=0; j<N; j++){
            if(n[j]%2 != 0){
                count++
            }
        }

        if(count % 2 === 0){
            console.log("No")
        } 
        else{
            console.log("Yes")
        }
       
        line+=1

    }

}
runProgram(`3
1
1
2
1 101
2
1 200`)