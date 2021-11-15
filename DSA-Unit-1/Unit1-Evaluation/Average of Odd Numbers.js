function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1

    for(var i=0; i<T; i++){
        var N = input[line++].split(" ").map(Number)
        var arr = input[line++].split(" ").map(Number)
        var count = 0
        var sum = 0
        for(var j=0; j<N; j++){

            if(arr[j]%2 != 0){
                sum += arr[j]
                count++
                
            }
        }
       

        var average = sum/count
        if(count === 0){
            console.log(-1)
        } else {
        console.log(Math.floor(average))
        }
        // console.log(0/0)
        
    }
}
runProgram(`2
3
2 2 2
5
2 2 2 2 1`)