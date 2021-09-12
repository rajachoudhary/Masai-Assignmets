function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var output = 0
    var max = 0
    for(var i=0; i<N; i++){

        var count = 0

        for(var j=0; j<N; j++){

            if(arr[i] === arr[j]){
                count++
            }
        }
        if(max<count){
            output = arr[i]
            max = count
        } 
    }
    console.log(output)
}
runProgram(`5
0 2 0 6 9`)