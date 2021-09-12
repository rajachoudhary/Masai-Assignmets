function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    
    var arr = input[1].split(" ").map(Number)
    var count = 0
    for(var i=0; i<N; i++){

        var subarr = []
        for(var j=i; j<N; j++){

            subarr.push(arr[j])
            for(var k=0; k<subarr.length; k++){

                if(subarr[k] === 10){
                    count++
                    
                }
            }
        }
        console.log(subarr)
        
        
    }
     console.log(count)
}
runProgram(`6
1 2 10 5 10 7`)