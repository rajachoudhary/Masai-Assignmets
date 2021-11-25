function largestNum(N,arr){
    let low = 0;
    let high = N-1;
    let ans = 0;
    if(arr.length === 1){
        ans = arr[0]
    } else {
        while(low <= high){
            let mid = Math.floor(low + (high-low)/2)
    
            if(arr[mid] >= arr[mid+1]){
                ans = arr[mid]
                break
            } else if (arr[low] < arr[high]){
                ans = arr[high]
    
            } else if (arr[low] <= arr[mid]){
                low = mid+1
            } else {
                high = mid-1
            }
        }
    }
    return ans
}

function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].split(" ").map(Number)
    let output = largestNum(N,arr)
    console.log(output)
}
runProgram(`1
3`)