function runProgram(input){
    input = Number(input)
     if(32 < input){
        console.log("Too Low")
    } else if (input === 0){
        console.log("-1")

    } else {
        console.log(Math.floor(32/input))
    }
}
runProgram(`24`)