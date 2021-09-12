

function factorial(n){

    if (n == 1 ){
        return 1;
    } else {
        return n*factorial(n-1)
    }
}
function runProgram(input){
    var N = Number(input)
    var product = factorial(N)
    console.log(product)
}
runProgram(`5`)