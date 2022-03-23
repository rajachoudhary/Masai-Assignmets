function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].split(" ").map(Number)

    let max = 0
    for(var i=0; i<N; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    console.log(max)
}
runProgram(`5
6 7 8 1 4`)