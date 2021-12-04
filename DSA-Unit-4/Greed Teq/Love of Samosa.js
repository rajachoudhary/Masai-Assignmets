function runProgram(input){
    input = input.split("\n")
    const Nk = input[0].split(" ").map(Number)
    const N = Nk[0]
    const K = Nk[1]
    const arr = input[1].split(" ").map(Number)
    arr.sort((a,b)=> a-b)
   let sum = 0;
   let count = 0
    for(var i=0; i<N; i++){
        sum += arr[i]

        if(sum <= K){
            count++
        }
    
    }
    console.log(count)
}
runProgram(`4 10
5 4 2 4`)