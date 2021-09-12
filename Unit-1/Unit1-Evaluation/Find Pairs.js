function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1

    for(var i=0; i<T; i++){
        var NM = input[line++].split(" ").map(Number)
        var arr = input[line++].split(" ").map(Number)
        var count = 0
        for(var j=0; j<NM[0]; j++){

            for(var k=j+1; k<NM[0]; k++){

                if(arr[j]*arr[k] === NM[1]){
                    count++
                }
                
            }
            
        }
        console.log(count)
        
    }
}
runProgram(`2
3 0
1 3 2
5 4
3 2 2 1 5`)