function length(input){
    
    if(input == "" ){
        return 0 ;
    } else {    
        
        return 1 + length(input.substr(1));
    }
      
}
function runProgram(input){
   
    var input = input.trim()
    console.log(length(input))
    
}
runProgram(`masaischool`)