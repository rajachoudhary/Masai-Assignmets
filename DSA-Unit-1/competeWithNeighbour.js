function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var n = input[1].split(" ").map(Number)
    var count = 0

    for(var i=0; i<N; i++){

        if(n[i] > n[i-1] && n[i] > n[i+1]){
            count++
        } 
        
    }
     if(n[0] > n[1]) {

        count++
    } 
    if(n[N-1] > n[N-2]){

        count++
       
    }
  
     
    console.log(count)
}
runProgram(`12
2 0 4 9 2 0 3 5 0 9 8 10`)