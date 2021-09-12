function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var array = input[1].split(" ").map(Number)
    var count = 0
    var max = []
    
    for(var i=0; i<N; i++){

        if(array[i] %2 != 0 ){
            count++
        }
        if(array[i] != array[i+1]){
            max.push(count)
            count = 0
        }
    }

    var maxOutput = max[0]
    
    for(var j=0; j<max.length; j++){

        if(max[j] > maxOutput ){
            maxOutput = max[j]
        }
    }
    console.log(maxOutput)
   
}
runProgram(`12
1 1 1 1 2 2 2 2 2 1 1 1`)
