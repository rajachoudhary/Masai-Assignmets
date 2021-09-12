function runProgram(input){
    input = input.split("\n")
    var nk = input[0].split(" ").map(Number)
    var N = nk[0]
    var K = nk[1]
    var arr = input[1].split(" ").map(Number)
    
    for(var i=0; i<N-1; i++){

      for(var j=0; j<N-i-1; j++){

        if(arr[j]%K >arr[j+1]%K){

            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
      }  
      
    }
    console.log(arr)
}
runProgram(`5 6
12 18 17 65 46`)