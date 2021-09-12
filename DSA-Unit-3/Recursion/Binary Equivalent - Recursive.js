 var output = []
 
 function findBinary(num){
     
    if (num == 0){
       return  0  ;
    }
    
    else{
        
        findBinary(Math.floor(num/2))
        output.push(num%2)
        
    }
    return output
   
    
    
}
function runProgram(input){
    input = input.split("\n").map(Number)
    var N = input[0]
    for(var i=1; i<=N; i++){
        var binary = findBinary(input[i])
        console.log(binary.join(""))
        output  = []
    }

   
}
runProgram(`2
15
128`)
