function runProgram(input){
    input = input.split("\n")
    let T = +input[0]
    let line = 1
    for (let i = 0; i < T; i++) {
       let N = +input[line++]
       let mid = Math.floor(N/2)
       
       let arr = input[line++].split(" ").map(Number)
       let count = 0
       for (let j = 0; j <= mid; j++) {
            let countOccur = 1
            for (let k = j+1; k < N; k++) {
                
                if(arr[j] === arr[k]){
                    countOccur++
                }
               
            }
           
            if(countOccur > count){
                count = countOccur
                if(count > mid){
                    console.log(arr[j])
                    break;
              
                }
            }  
       }
        if(count <= mid){
           console.log(-1)
        }   
    }
}
runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`)