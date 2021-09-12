function runProgram(input){
   
    var count = 0;
    for(var i=0; i<input.length; i++){
        
        if(input[i] != "a" && input[i] != "e" && input[i] != "i" 
        && input[i] != "o" &&input[i] != "u" ){
            count++
        }
        
    }
    console.log(count)
}
runProgram(`masaischool`)