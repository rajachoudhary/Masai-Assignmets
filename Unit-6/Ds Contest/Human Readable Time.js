function runProgram(input){
    input = +input
    let hrs = Math.floor(input/60)
    let min = Math.floor(input%60)
    if(hrs  === 1){
        console.log(hrs+ "hr" + " " + min+"mins")

    } else {
        console.log(hrs+ "hrs" + " " + min+"mins")

    }
}
runProgram(`135`)