function NoOfWays(input){
    if(input < 0){

        return 0
    }
    if (input === 0){
        return 1
    } else {

       return NoOfWays(input-1) + NoOfWays(input-2) + NoOfWays(input-3)
        
    }
}

function runProgram(input){
    input = Number(input)
    console.log(NoOfWays(input))
}
runProgram(`4`)