function twoSum(N,K,arr){
    let outputArr = []
    let low = 0;
    let high = N-1;
    while(low < high){
        if(arr[low] + arr[high] === K){
            outputArr.push(low)
            outputArr.push(high)
            break
        } else if (arr[low] + arr[high] > K){
            high--
        } else {
            low++
        }
    }

    if(outputArr.length === 0){
        outputArr.push(-1)
        outputArr.push(-1)
    }
    console.log(outputArr.join(" "))
}

function runProgramn(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1
    for(var i=0; i<T; i++){
        let Nk = input[line++].split(" ").map(Number)
        let N = Nk[0]
        let K = Nk[1]
        let arr = input[line++].split(" ").map(Number)
         twoSum(N,K,arr)
        
    }
}
runProgramn(`1
10 96
10 22 48 75 85 110 127 145 164 184`)

