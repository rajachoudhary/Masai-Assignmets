function runProgram(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1

    for(let i=0; i<T; i++){
        let N = Number(input[line++])
        let arr = input[line++].split(" ").map(Number)

        for(let j=0; j<N; j++){
            let count = 0
            let output = 0
            for(let k=0; k<N; k++){

                if(arr[j] === arr[k]){
                    count++
                    output = arr[j]
                    
                }
            }
            if(count === 1){
                console.log(output);
                break
            }
        }
    }
}
runProgram(`2
1
5
5
1 2 1 3 2`)