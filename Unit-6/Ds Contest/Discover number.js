function runProgram(input){
    input = input.split("\n")
    let NQ = input[0].split(" ").map(Number)
    let N = NQ[0]
    let Q = NQ[1]
    let line = 2
    let arr = input[1].split(" ").map(Number)
    for (let i = 0; i < Q; i++) {
        let value = +input[line++]
        let count = 0
        for (let j = 0; j < N; j++) {
            if(value === arr[j]){
                count++
                break;
            }
            
        }
        if(count > 0){
            console.log("YES")
        }   else {
            console.log("NO")
        }
    }
}
runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`)