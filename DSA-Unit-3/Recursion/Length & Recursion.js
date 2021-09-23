// function length(input){
    
//     if(input == "" ){
//         return 0 ;
//     } else {    
        
//         return 1 + length(input.substr(1));
//     }
      
// }
// function runProgram(input){
   
//     var input = input.trim()
//     console.log(length(input))
    
// }
// runProgram(`masaischool`)
function str(input){
    if(input === ""){
        return 0
    } else {
        return 1 + str(input.substr(1));
    }
}

function runProgram(input){
    // console.log(input)
    var count = str(input);
    console.log(count)
}
runProgram(`masaischool`)