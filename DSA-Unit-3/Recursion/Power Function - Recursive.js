function power(a,b){

    if (b === 0){
        return 0
    } else {
        return a*power(a,(b-1))
    }
}
 

function runProgram(input){
    input = input.split(" ").map(Number)
    var a = input[0]
    var b = input[1]
    console.log(power(a,b))
}
runProgram(`2 4`)