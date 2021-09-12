function passingInputs(N,arr){
   var expected = 1
    var stack = []
    var flag = "yes"
    for(var i=0; i<N; i++){

        if(arr[i] === expected){
            expected++
        } else if (arr[i] != expected && stack.length === 0){
            stack.push(arr[i])
            // expected++
        } else if (arr[i] != expected && stack[stack.length-1] === expected){
            
            stack.pop()
            expected++
            for (var j=stack.length-1; j>=0; j--){

                if(expected === stack[j]){
                    stack.pop()
                    expected++
                } else {
                    break
                }

            }
            if(expected === arr[i]){
                expected++
            } else {
                stack.push(arr[i])
            }
            
        } 
        else if (arr[i] > stack[stack.length-1]){
            flag = "no"
            break;
            
        }
        else if (stack[stack.length-1] != expected){
            stack.push(arr[i])
        } else if (i === N-1){

            for (var k=stack.length-1; k>=0; k--){

                if(expected === stack[k]){
                    stack.pop
                    expected++
                } else {
                    flag = "no"
                    break
                }

            }
        }


    }
    return flag

}

function runProgram(input){
    input = input.trim().split("\n")
    var line = 0
    for(var i=0; i<input.length-1; i++){
        
        var N = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
        i++
        var output = passingInputs(N,arr)
        console.log(output)
        
    }
}
runProgram(`3
2 1 3
4
4 2 1 3
0`)