function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    
    for(var i=1; i<input.length; i++){

        if(input[i] === "India"){
            console.log(i)
        }
    }
}
runProgram(`5
Russia
USA
Japan
China
India`)