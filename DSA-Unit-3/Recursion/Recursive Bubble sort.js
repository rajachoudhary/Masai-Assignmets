function sorting(N,arr){
   
    for(var i=0;i<arr.length-1;i++) {
        
        if(arr[i]>arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        } else {
            arr[i] === arr[i]
        }
    }
}


function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var output = sorting (N,arr)
    console.log(output)
}
runProgram(`5
3 5 0 9 8`)