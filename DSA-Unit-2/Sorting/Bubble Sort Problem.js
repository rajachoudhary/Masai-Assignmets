function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    
    for(var i=0; i<N-1; i++){

        for(var j=0; j<N-i-1; j++){
            
            if(arr[j]>arr[j+1]){

                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr.join(" "))
}
runProgram(`5
3 5 0 9 8`)