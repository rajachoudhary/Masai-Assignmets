function runProgram(input){

    var count = 0
    for(var i=0; i<input.length; i++){

        for(var j=i; j<input.length; j++){
            
            if(input[i] === input[j]){
                count++
            }
        }
    }
    console.log(count)
}
runProgram(`abcab`)