function lastOccur (arr,N,K){
    let low = 0;
    let high =  N-1;
    let ans = -1
    while(low <= high){
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid] === K){
            ans = mid
            low = mid+1
        } else if (arr[mid] < K){
            low = mid + 1
            
        } else {
            high = mid - 1
        }
    }
    return ans;
}

function firstOccur(arr,N,K){
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
    input= input.split("\n")
    let Nk = input[0].split(" ").map(Number)
    let N = Nk[0]
    let K = Nk[1] 
    let arr = input[1].split(" ").map(Number)
    let output1 = firstOccur(arr,N,K)
    let output2 = lastOccur(arr,N,K)
    let noOfOccurences = (output2 - output1)+1
    console.log(noOfOccurences)
    
}
runProgram(`6 3
2 3 3 3 6 9`)