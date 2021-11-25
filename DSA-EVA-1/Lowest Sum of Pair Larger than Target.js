function lowestPair(N,T, arr){
    let low = 0;
    let high = N-1
    let ans = arr[N-1]+arr[N-2];

    while(low <= high){

        
        if(arr[low]+arr[high] > T  && arr[low]+arr[high] < ans){
            ans = arr[low] + arr[high]
            high--
        } else if(ans ) {
            low++
        }
    }
    return ans
}


function runProgram(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1
    for(var i=0; i<T; i++){
        let Nt = input[line++].split(" ").map(Number)
        let N = Nt[0]
        let target = Nt[1]
        let arr = input[line++].split(" ").map(Number)
        let output = lowestPair(N,target,arr)
        console.log(output)
    }
}
runProgram(`1
6 8
10 8 1 7 1 4`)