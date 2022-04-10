function runProgram(input){
    input = input.split("\n")
    let nk = input[0].split(" ").map(Number) 
    let N = nk[0]
    let K = nk[1]
    let arr = input[1].split(" ").map(Number)
    arr.sort((a,b)=>a-b)
    if(K <= arr[0]){
        console.log(0)
    } else {
        console.log( K - arr[0] )
    }
}
runProgram(`3 4
1 2 5`)
