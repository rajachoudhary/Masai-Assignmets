function runProgram(input){
    var input = input.split("\n")
    var N = Number(input[0])
    var str = input[1].split("")
    var max = 0
    var output = ""
    for(var i=0; i<N; i++){
        var count = 1
        for(var j=i+1; j<N; j++){

           if(str[i]  === str[j]){
               count++
               
           }

        }
        if(max < count){
            max = count
            output = str[i]
        }
        
    }
    console.log(output)
}
runProgram(`6
abcbaa`)