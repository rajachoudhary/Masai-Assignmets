function firstOccur(N,K,arr){
    let low = 0;
    let high = N-1
    let output = 0
   
    while (low<=high) {
        let mid =  low + Math.floor((high-low)/2)
        if(arr[mid] === K){
            output = mid
            high = mid-1
            
        } else if (K>arr[mid]){
            low = mid+1
        } else {
            high = mid-1
        }
    }
    return output
    
}
function lastOccur(N,K,arr){
    let low = 0;
    let high = N-1
    let output = 0
   
    while (low<=high) {
        let mid =  low + Math.floor((high-low)/2)
        if(arr[mid] === K){
            output = mid
            low= mid+1
            
        } else if (K>arr[mid]){
            low = mid+1
        } else {
            high = mid-1
        }
    }
    return output
    
}
function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let arr = input[1].split(" ").map(Number)
    let K = +input[2]

    let first = firstOccur(N,K,arr)
    let last = lastOccur(N,K,arr)
    if(first === -1 && last === -1){
        console.log(-1)
    } else {
        console.log(first,last,last-first+1)
    }
   
}
runProgram(`6
1 1 1 2 2 2	
1`)