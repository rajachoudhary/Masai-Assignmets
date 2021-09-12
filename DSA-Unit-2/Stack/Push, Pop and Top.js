function runProgram (input){
    input = input.split("\n")
    var N = Number(input[0])
    var stack = []
    var top = -1
    for(var i=1; i<=N; i++){

        var arr = input[i].split(" ").map(Number)
        if(arr[0] === 1){
            stack.length++
           stack[stack.length - 1]  = arr[1] 
        }
        else if (arr[0] === 2){
            if( stack.length === 0){
                stack.length =stack.length
            } else{
                stack.length--
            }
        }
        else {

            if(stack.length >0){
                console.log(stack[stack.length-1])
            } else{
                console.log("Empty")
            }
        }
    }
    
}
runProgram(`6
1 15
1 20
2
3
2
3`)