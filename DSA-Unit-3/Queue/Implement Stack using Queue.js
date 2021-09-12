function runProgram(input){
    input = input.trim().split("\n")
    var N = Number(input[0])
    var q1 = []
    var q2 = []
    var count = 0
    for(var i=1; i<=N; i++){

        var value = input[i].trim().split(" ").map(Number)
        
        if(value[0] === 0){

            q1.push(value[1])

            for(var j=0; j<q2.length; j++){

                q1.push(q2[j])
            }
            q2 = []
            for(var k=0; k<q1.length; k++){
                q2.push(q1[k])
            }
            q1 = []
        }
        else if(value[0] === 1){
            console.log(q2[count])
        } else {
            count++
        }
        
    }
    
    
}
runProgram(`6
0 1
0 2
0 3
1 
2
1`)

