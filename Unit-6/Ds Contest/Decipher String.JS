function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for (let i = 0; i < T; i++) {
        
        let N = +input[line++]
        let arr = input[line++].split("")
        let output = []
        for (let j = 0; j < N; j+=2) {
           
            let str = arr[j]
            let no = +arr[j+1]
            for (let k = 0; k <no ; k++) {
               output.push(str)
                
            }
        }
        console.log(output.join(""))
        
    }
}
runProgram(`2
6
a2b1c2
6
a2z1a2`)