function runProgram(input){
 input = input.split("\n")
 var t = Number(input[0])
 var line = 1
    for(var i=0; i<t; i++){
        var n = Number(input[i+line])
        var a = input[i+line+1].split(" ").map(Number)
        line+=1 
        
        var even = ""
        for(var j=0; j<n; j++){
            var sum = 0
            for(var k=j; k<n; k++){

                sum += a[k]
            
                if(sum % 2 === 0){
                    even = "yes"
                    break;
                }
            }
            
        }

        if(even === "yes"){
            console.log("Yes")
        } else {
            console.log("No")
        }
    }
}
runProgram(`2
1
5
4
1 2 3 4`)