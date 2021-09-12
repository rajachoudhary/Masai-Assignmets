function runProgram(input){
    input = input.split("")
    var N = input.length
    var output = []
    for(var i=N-1; i>=0; i--){

        if(input[i] === input[i-1]){

            i=i-1
            // input.length = input.length-2

        }
         else {
            
            output.length++
            output[output.length-1]=input[i]
            // input.length--
        }
    }
    // ouput = [c]
    // console.log(input)
    
    if(output.length === 0 ){
        console.log("Empty String")
    } else {

        console.log(output.reverse().join(""))
    }
    
   
   
}
runProgram(`aaabbcccdd`)