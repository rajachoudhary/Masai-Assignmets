
 function subSequence(ans,arr,l, r){

    for(var i=l; i<=r; i++){
        console.log(ans+arr[i])
        subSequence(ans+arr[i],arr,i+1,r)
    }
}

function runProgram(input){
    input = input.split("\n")
    var N = input[0]
    var arr = input[1].split("")
    subSequence("", arr, 0 , N-1,)
    
}
runProgram(`4
abcd`)