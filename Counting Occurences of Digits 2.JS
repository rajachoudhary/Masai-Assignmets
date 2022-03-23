function runProgram(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1

    for(let i=0; i<T; i++){
        let N = Number(input[line++])
        let arr = input[line++].split("").map(Number)
        let newArr =  new Array (10).fill(0)
        for(var j=newArr.length-1; j>=0; j--){
            let count = 0
            for(var k=0; k<N; k++){
                if(j === arr[k]){
                    count++
                }
            }
            newArr[j] = count
        }
        console.log(newArr.reverse(" ").join(" "))
        
    }
}
runProgram(`2
10
0123456789
6
235452`)