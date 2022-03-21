function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let arr = input[1].split(" ").map(Number)

    for (let i = 0; i <= N; i++) {
        let str= []
        for (let j = i; j < N; j++) {
           str.push(arr[j])
            console.log(str.join(" "))
        }
      
    }
}
runProgram(`3
1 2 2`)