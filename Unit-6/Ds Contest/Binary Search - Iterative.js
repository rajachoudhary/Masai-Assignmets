function runProgram(input){
    input = input.split("\n")
    let nk = input[0].split(" ").map(Number)
    let N = nk[0]
    let K = nk[1]
    let arr = input[1].split(" ").map(Number)
    let output = -1
    // arr.sort((a,b)=>a-b)
    for (let i = 0; i < N; i++) {
       if(arr[i] === K){
            output = 1
            break
        } 
    }
    console.log(output)
    
}
runProgram(`5 0
2 -2 1 3 4`)