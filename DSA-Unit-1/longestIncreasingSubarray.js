function runProgram(input){
    input = input.split("\n")
    var testCase = Number(input[0])
    var line = 1

    for(var i=0; i<testCase; i++){

        var N = input[i+line].split(" ").map(Number)
        var array = input[i+line+1].split(" ").map(Number)
        line += 1

        var arrayLength = []
        var subArrayCount = 1
        
        for(var j=0; j<N; j++){

            if(array[j] < array[j+1] ){
                subArrayCount++
            } else{
                subArrayCount = 1
            }
            arrayLength.push(subArrayCount)
        }

        var longestSubArray = arrayLength[0]

        for(var k=0; k<arrayLength.length; k++){

            if(arrayLength[k] > longestSubArray){
                longestSubArray = arrayLength[k]
            }
        }
        console.log(longestSubArray)
        
        
    }
    
}
runProgram(`2
2
1 1
1
15`)
