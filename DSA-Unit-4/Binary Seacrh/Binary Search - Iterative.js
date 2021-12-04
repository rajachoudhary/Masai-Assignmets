function iterative(N,K,arr){
    
    let low = 0;
    let high =  N-1;
    let ans = 0;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid] === K){
          ans = 1
          break
        } else if (arr[mid] < K){
            low = mid + 1    
        } else if(arr[mid] > K) {
            high = mid - 1
        }
    }
    if(ans == 1){
        return ans
    } else {
        ans = -1
        return ans
    }
}
function runProgram(input){
    input= input.split("\n")
    let Nk = input[0].split(" ").map(Number)
    let N = Nk[0]
    let K = Nk[1] 
    let arr = input[1].split(" ").map(Number)
    let output = iterative(N,K,arr)
   console.log(output)
}
runProgram(`5 1
2 -2 0 3 4`)