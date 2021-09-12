function justGreater(N,arr){
    var stack = []
    var newArr = []
    var top = -1
    for(var i = N-1; i >= 0; i--){

        
        if(i === N-1){

            newArr.push(-1)
            top++
            stack.push(arr[i])

        } 
        else {

            for(var j=stack.length-1; j>=0; j--){

                if(stack[j] > arr[i]){

                    top++
                    newArr.push(stack[j])
                    stack.push(arr[i])
                    break;
                } 
                else if(stack[j] <= arr[i]) {
                   
                    stack.pop()
                    top--

                    if(top === -1){
                        newArr.push(-1)
                        top++
                        stack.push(arr[i])
                    }
                   
                } 
            }
        }
    }
    return newArr
}

function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1
    for(var i=0; i<T; i++){
        var N = Number(input[line++])
        var arr = input[line++].split(" ").map(Number)
        var output = justGreater(N,arr)
        // console.log(N,arr)
        console.log(output.reverse().join(" "))

    }
}
runProgram(`1
4
1 3 2 4`)