function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1
   
    for(var i=0; i<T; i++ ){
		var output = []
        var N = Number(input[line++])
        var arr = input[line++].split(" ").map(Number)
       
        arr.sort(function(a,z){
            return a-z;
        })
        for(var j=0; j<N; j++){
            
            if(arr[j] !== arr[j+1]){
                output.push(arr[j])
            } else{
                j=j+1
            }
        }
        console.log(output.join(" "))
    }
    
}
runProgram(`2
1
5
6
1 2 1 3 2 7`)