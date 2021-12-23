function sumExistOrNot(N,arr,sum,res){

    if(sum === 0){
        return true
    } 
    
    if(N === 0){
        return false
    } 
    if(res[N][sum] != -1){
        return res[N][sum]
    }
    if(arr[N-1] > sum){
        return  res[N][sum]=sumExistOrNot(N-1,arr,sum,res)
    } else {
        return res[N][sum]=sumExistOrNot(N-1,arr,sum-arr[N-1],res) || sumExistOrNot(N-1,arr,sum,res)
    }
 
}

function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].split(" ").map(Number)
    let sum = Number(input[2])
    const res = []
    for(let i=0; i<=N; i++){
        let arr1 = []
        for(let j=0; j<=sum; j++){
            arr1.push(-1)
        }
        res.push(arr1)
    }
    // console.log(res)
    let output = sumExistOrNot(N,arr,sum,res)
    if(output === true){
        console.log("yes")
    } else{
        console.log("no")
    }
}
runProgram(`9
1 2 3 4 5 6 7 8 9
5`)