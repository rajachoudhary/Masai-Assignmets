function lowerBound(arr,N,K){
    let low = 0;
    let high =  N-1;
    let ans = -1
    while(low <= high){
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid] === K){
            ans = mid
            high = mid-1
        } else if (arr[mid] < K){
            low = mid + 1
            
        } else {
            high = mid - 1
        }
    }
    return ans;
}

function runProgram(input){
    input = input.split("\n")
    var Nk = input[0].split(" ").map(Number)
    var N = Nk[0]
    var K = Nk[1]
    var arr = input[1].split(" ").map(Number)
    var output = lowerBound(arr,N,K)
    console.log(output)
}
runProgram(`10 7
0 2 4 4 5 5 7 7 9 10`)