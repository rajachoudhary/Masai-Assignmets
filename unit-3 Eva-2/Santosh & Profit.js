function runProgram(input){
    input = input.split("\n").map(Number)
    var T = input[0]
    for(var i = 1; i <= T; i++){
        var count = 0
        if(input[i]%2 != 0){
            console.log(0)
        } else {
            count = input[i] / 4
            if(input[i] % 8 != 0){

                count = count + Math.floor(input[i]/8) 
            } 
            
        }
        console.log(count)
    }
}
runProgram(`1
12`)