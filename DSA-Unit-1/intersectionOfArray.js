function runProgram(input){
 input = input.split("\n")
 var N = Number(input[0])
 var arr1 = input[1].split(" ").map(Number)
 var arr2 = input[2].split(" ").map(Number)
 

 for(var i=0; i<N; i++){

    for(var j=0; j<N; j++){

        if(arr1[i] === arr2[j]){
            console.log(arr1[i])
        }
    }
 }
}
runProgram(`3
4 5 7
9 2 5`)