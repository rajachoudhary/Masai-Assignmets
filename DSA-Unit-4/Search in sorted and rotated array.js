function  serchInSortedAndRotatedArr(N,K,arr){
    let low = 0;
    let high = N-1;
    let ans = -1;
    while (low <= high){
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid] === K){
            ans = mid
            high = mid-1
        } 
        else if(arr[low] <= arr[mid]) {
            //low to mid arr is sorted
            if((arr[low] <= K) && (arr[mid] > K)){
                high = mid-1
            } else {
                low = mid+1
            }
        }
        else if (arr[mid] <= arr[high]){
            //mid to high is sorted
            if(arr[mid] < K && K <= arr[high]){
                low = mid+1
            } else {
                high = mid -1
            }
        }
    }
     
    return ans
}
function runProgram(input){
    input = input.split("\n")
    let Nk = input[0].split(" ").map(Number)
    let N = Nk[0]
    let K = Nk[1]
    let arr = input[1].split(" ").map(Number)
    let output = serchInSortedAndRotatedArr(N,K,arr)
    console.log(output)
}
runProgram(`8 -2
0 8 9 -9 -7 -3 -2 -1`)