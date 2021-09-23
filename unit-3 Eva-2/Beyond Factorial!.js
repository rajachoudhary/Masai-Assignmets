function factorial(input){

    if(input === 0){
        return 0
    } else {
        return Math.log(input) + factorial(input-1)
    }
}

function runProgram(input){
    input = Number(input);
    var output = factorial(input)
    console.log(output.toFixed(4))
}
runProgram(`3`)
// console.log(Math.log(1)+Math.log(2)+Math.log(3))