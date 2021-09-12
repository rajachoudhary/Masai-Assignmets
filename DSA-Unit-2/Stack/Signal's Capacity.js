function signal(N,arr){
    var stack1 = []
    var stack2 = []
    var newArr = []
    
    for(var i=0; i<N; i++){

        if(i===0){
          stack1.push(arr[i])
        //   top++
          stack2.push(i)
          newArr.push(1)
        } 
        else {

            for(var j=stack1.length-1; j>=0; j--){
    
                if(stack1[j]>arr[i]){

                    stack1.push(arr[i])
                    newArr.push((i-stack2.length+1))
                    stack2.push(i)
                    break;
                } else {
                    // top--
                    stack1.pop()
                    stack2.pop()
                    if( stack1 === []){
                        newArr.push(1)
                    }
                }
            }
        }
    }
    console.log(newArr)
}

function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1
    for (var i = 0; i<T; i++){
        var N = Number(input[line++])
        var arr = input[line++].split(" ").map(Number)
        var output = signal(N,arr)
        // console.log(output)
    }
}
runProgram(`1
5
3 5 0 9 8`)