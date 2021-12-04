function recursive(N,K,arr){
    
    if(N === arr.length){
        return 
    } else if(arr[N] === K) {
        return 1
    } else {
        return recursive(N+1,K,arr)
    }
}
function runProgram(input){
    input= input.split("\n")
    let Nk = input[0].split(" ").map(Number)
    let N = 0
    let K = Nk[1] 
    let arr = input[1].split(" ").map(Number)
    let output = recursive(N,K,arr)
    if(output === 1){
        console.log(1)
    } else {
        console.log(-1)
    }
}
runProgram(`5 0
2 -2 0 3 4`)