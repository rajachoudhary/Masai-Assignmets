function runProgram(input){
    input = input.trim(" ").split("\n")
    let T = Number(input[0])
    let line = 1

    for(var i=0; i<T; i++){
        let N = Number(input[line++])
        let arr = input[line++].trim(" ").split(" ").map(Number)
        let output = []
        let pro = 1
        for(var j=0; j<N; j++){
            pro *= arr[j]
        }
        for(var k=0; k<N; k++){
            output.push(pro/arr[k])
        }
        console.log(output.join(" "))
    }
}
runProgram(`2
5
1 2 3 4 5
3
3 2 7`)