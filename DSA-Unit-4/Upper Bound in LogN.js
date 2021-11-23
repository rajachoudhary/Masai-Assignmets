function upperBound(N,K,arr){
    let low = 0
    let high = N-1
    let ans = -1
    while(low <= high){
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid] > K){
            ans = mid
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return ans
}
function runProgram(input){
    input= input.split("\n")
    let Nk = input[0].split(" ").map(Number)
    let N = Nk[0]
    let K = Nk[1] 
    let arr = input[1].split(" ").map(Number)
    let output = upperBound(N,K,arr)
    console.log(output)
}
runProgram(`10 4
0 2 4 4 5 5 7 7 9 10`)