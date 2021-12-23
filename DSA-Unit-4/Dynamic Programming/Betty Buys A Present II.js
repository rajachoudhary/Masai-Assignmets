function buysAPresent(N,P,arr){

    if(P === 0){
        return 0
    }
    if(P < 0){
        return 0
    }
    if(N === 0){
        return 0
    }
    if(arr[N] > P){
        return 0
    } else {
        return 1 + buysAPresent(N,P-arr[N],arr)
    }
}


function runProgram(input){
    input = input.split("\n")
    let np = input[0].split(" ").map(Number)
    let N = np[0]
    let P = np[1]
    let arr = input[1].split(" ").map(Number)
    let res =  new Array(N).fill(-1)
    let output = buysAPresent(N,P,arr)
    // if(output > 0){
    //     console.log(output)
    // } else {
    //     console.log(-1)
    // }
    console.log(output)
}
runProgram(`3 11
1 5 7`)