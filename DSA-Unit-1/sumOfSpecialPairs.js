function runProgram(input){

    input = input.split("\n")
    var N = Number(input[0])
    var A = input[1].split(" ").map(Number)
    var sum = 0
    for(var i=0; i<N; i++){

        for(var j=i+1; j<N; j++){

            var indexDiff = j-i
            
            var count = 1
            for(var k=2; k<=indexDiff; k++){

                if(indexDiff % k === 0){
                    count++
                }
                
            }

            if(count === 2){
                sum += Math.abs(A[j] - A[i])
                
            }
        }
    }
    console.log(sum)
}
runProgram(`6
1 2 3 5 7 12`)

// console.log(Math.sqrt(81))