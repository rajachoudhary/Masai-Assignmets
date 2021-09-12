function runProgram (input){
    input = input.split("\n")
    var N = Number(input[0])
    var stack = []
    for(var i=1; i<=N; i++){

        var arr = input[i].split(" ").map(Number)
        if(arr[0] === 2){
            stack.length++
           stack[stack.length - 1]  = arr[1] 
        }
        else if (arr[0] === 1){
            if(stack.length >0){
                console.log(stack[stack.length-1])
                stack.length--
            } else {
                console.log("No Food")
            }
           
        }
        
        
    }
    
}
runProgram(`6
1
2 5
2 7
2 9
1
1`)