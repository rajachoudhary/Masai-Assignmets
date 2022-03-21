function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let arr1 = input[1].split(" ").map(Number)
    let arr2 = input[2].split(" ").map(Number)

    let sum1 = 0
    let sum2 = 0
    
    
    for (let j = 0; j < N; j++) {
        sum1+=arr1[j] 
        sum2+=arr2[j]
        
    }
    let ave1 = Math.ceil(sum1/N)
    let ave2 = Math.ceil(sum2/N)

    if(ave1> ave2){
        if(ave1%2 === 0){
            console.log(ave1)
        } else {
            console.log(-1)
        }
    } else {
        if(ave2%2 === 0){
            console.log(ave2)
        } else {
            console.log(-1)
        }
    }
        
        
    
}
runProgram(`3
10 20 30
40 80 60`)