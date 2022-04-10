function runProgram(input){
    input = input.split("\n")
    let nk = input[0].split(" ").map(Number)
    let N = nk[0]
    let K = nk[1]
    let arr = input[1].split(" ").map(Number)
    let count = 0
    for (let i = 0; i < N-1; i++) {
        
        for (let j = i+1; j < N; j++) {
           
            if(arr[i]+arr[j] === K){
                count++
            }
            
        }
    }
    console.log(count)
}
runProgram(`5 9
3 0 6 2 7`)