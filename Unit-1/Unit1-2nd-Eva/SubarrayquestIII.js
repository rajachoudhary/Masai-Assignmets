function runProgram(input){
input = input.split("\n")
var T = Number(input[0])
var line = 1

for(var i=0; i<T; i++){
    var N = Number(input[i+line])
    var arr = input[i+line+1].split(" ").map(Number)
    line+=1
    var count = 0
    for(var j=0; j<N; j++){

        var subarr = []
        for(var k=j; k<N; k++){
            subarr.push(arr[k])
            
            for(var l=0; l<subarr.length; l++){

                if(subarr[0] %2 === 0 && subarr[subarr.length-1]%2 != 0){
                    count++
                    break
                   
                }
            }
        }
    }
    console.log(count)
}
}
runProgram(`2
5
1 2 3 4 5
5
1 2 3 4 5`)