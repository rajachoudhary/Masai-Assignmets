function sorting(N,arr){
    if(N==1){
        return 
    } else {

        for(var i=0;i<N-1;i++) {
            
            if(arr[i]>arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            } 
            sorting(N-1,arr)
        }
    }
}


function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    sorting (N,arr)
    console.log(arr.join(" "))
}
runProgram(`5
3 5 0 9 8`)