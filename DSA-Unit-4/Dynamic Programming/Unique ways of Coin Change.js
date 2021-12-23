function noOfways(N,M,arr,res){

    if(N === 0){
       return 1
    } 
    if(N < 0){
        return 0
    }
    else if(M === 0){
        return 0
    } 
    else if(res[M][N] != -1){
        return res[M][N]
    } 
    else if(res[M-1] > N ){
        return res[M][N] = noOfways(N,M-1,arr,res)
    }
    else {
        return res[M][N] =  noOfways(N-arr[M-1],M,arr,res) + noOfways(N,M-1,arr,res)
    }
}

function runProgram(input){
    input = input.split("\n")
    let nm = input[0].split(" ").map(Number)  
    let N = nm[0]
    let M = nm[1]
    let arr = input[1].split(" ").map(Number)
    let res =  []
    for(let i=0; i<=M; i++){
        let arr1 = []
        for(let j=0; j<=N; j++){
            arr1.push(-1)
        }
        res.push(arr1)
    }

    let output = noOfways(N, M, arr,res)
    console.log(output)
}
runProgram(`4 3
1 2 3`)