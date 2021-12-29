function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].split(" ").map(Number)
    let Q = Number(input[2])
    let line = 3

    for(var i =0; i<Q; i++){
        let sum = 0
        let LR = input[line++].split(" ").map(Number) 
        let L = LR[0]
        let R = LR[1]
        for(var j=L-1; j<R; j++){
            console.log(j)
            sum+=arr[j]
        }
        console.log(sum)
      

    }

}
runProgram(`4
3 2 1 5
4
1 3
2 4
1 4
3 3`)