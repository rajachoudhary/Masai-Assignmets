function runProgram(input){
    input = input.split("\n").map(Number)

    for(var i=1; i<=input[0]; i++){

        var pro = 1
        
        for(var j=2; j<=input[i]; j=2){
            pro *= j
           
            if(pro === input[i]){
                break
            }
            if(pro > input[i]){
                break
            }
            j=2
        }
        if(pro === input[i]){
            console.log("True")
        } else{
            console.log("False")
        }
    }
}
runProgram(`9
-22323
-1024
-4059
1073741824
-13353
268435456
-24912
-16777216
27445`)