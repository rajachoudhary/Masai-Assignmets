function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    for(var i=0; i<N-1; i++){

        var min = i

        for(var j=i+1; j<N; j++){
            if(arr[j] < arr[min]){
                min = j

            }
        }
        var temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    console.log(arr)
}
runProgram(`4
-4 -3 -5 -19`)