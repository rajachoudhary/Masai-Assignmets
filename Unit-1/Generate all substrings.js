function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1
   
    for(var i=0; i<T; i++){

        var N = Number(input[i+line])
        var arr = input[i+line+1]
        line+=1 
        
        for(var k=0; k<N; k++){

            var sub = ""
            for(var j=k; j<N; j++){
    
                sub += arr[j]
                console.log(sub)
            }
        }
       
    }
   
}
runProgram(`2
4 
aman
4
raja`)