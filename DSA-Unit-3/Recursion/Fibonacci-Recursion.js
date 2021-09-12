
function fibonacci(input)
{   
    if(input==1 || input === 0)
        return input;
    
    return fibonacci(input - 1) + fibonacci(input - 2);
}

function runProgram(input){

    input = Number(input)
    console.log(fibonacci(input))
}
runProgram(`4`)