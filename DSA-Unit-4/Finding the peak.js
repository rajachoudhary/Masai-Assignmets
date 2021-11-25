function peak(N,arr){
    let ans = -1

    if (arr.length === 1){
        ans = 0
    }

    for(var i=1; i<N-1; i++){

        if(arr[0] > arr[1]){
            ans = 0   
        }
        else if(arr[i-1] > arr[i] && arr[i] < arr[i+1]){
            ans = arr[i]
        } 
    }

    if (ans === -1 ){
        if (arr[N-1] > arr[N-2]){
            ans = arr[N-1]
        } 
    }
    
    return ans
}
function runProgram(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1
    for(var i=0; i<T; i++){
        let N = Number(input[line++])
        let arr = input[line++].split(" ").map(Number)
        let output = peak(N,arr) 
        console.log(output)
        
    }
}
runProgram(`1
4
1 2 1 2`)

