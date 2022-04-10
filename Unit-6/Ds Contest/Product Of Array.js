function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for (let i = 0; i < T; i++) {
        
        let N = +input[line++]
        let arr = input[line++].split(" ").map(Number)
        let output = []
        for (let j = 0; j < N; j++) {
            let multi = 1
            for (let k = 0; k < N; k++) {
                
                if(j != k){
                    // console.log(j,k)
                    multi*=arr[k]
                }
            }
            output.push(multi)
            // console.log(multi)
            
        }
        console.log(output.join(" "))
        // console.log(output)
        
    }
}
runProgram(`2
5
1 2 3 4 5
3
3 2 7`)