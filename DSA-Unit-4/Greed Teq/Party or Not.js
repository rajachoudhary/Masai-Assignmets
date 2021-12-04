function  runProgram(input){
    input = input.split("\n")

    const Ncr = input[0].split(" ").map(Number)
    const N = Ncr[0]
    const K = Ncr[1]
    const R = Ncr[2]

    const arr = input[1].split(" ").map(Number)
    arr.sort( (a,b) => a-b)

    let sum = 0;
    let count = 0;
    for(var i=0; i<N; i++){

        sum += arr[i]
        if(sum <= R){
            count++
        }
    
    }
    
    if(count === K){
        console.log("Party")
    } else {
        console.log("Sad")
    }
}
runProgram(`5 3 24
6 4 21 20 13`)