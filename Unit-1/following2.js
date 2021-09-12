function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var n = input[1].split(" ").map(Number) 
    
    for(var i=0; i<N; i++){

        if(n[N-1] === 2){
            console.log(-1)
            break;
        }
        else if(n[i] === 2){
            console.log(n[i+1])
            
        } 
        
    }
    
   

    
}
runProgram(`5
3 4 2 0 1`)