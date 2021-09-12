function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var stack = []
    var top = -1
    var output = []
    for(var i=0; i<N; i++){

        if(i === 0){
            top++
            stack.push(arr[i])
            output.push(-1)
        } 
        else{
            for(var j=stack.length-1; j>=0; j--){

                if( arr[i] >stack[j]){
                    output.push(stack[j])
                    top++
                    stack.push(arr[i])
                    break;
                } 
                else if(arr[i]<=stack[j]) {
                    stack.pop()
                    // stack--
                    top--
                    if(top ===-1){
                        top++
                        output.push(-1)
                        stack.push(arr[i])
                    }
                }
            }
        }
    }
    console.log(output)
   
}
runProgram(`8
39 27 11 4 24 32 32 1`)