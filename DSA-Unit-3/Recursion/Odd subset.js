function odd(num,len){
    
    if(len < 0){
        return 0
    }
    else {
        
       return num[len] + odd(num,len-1)
    }
    

}
var count = 0
function subset(eStr,N,arr,zero){

    if(zero <= N+1 && eStr != ""){
        
        var num = eStr.split("").map(Number)
        var len = num.length
       var output =  odd(num,len-1)
        if(output % 2 != 0){
            count++
        }
    }
    
    for(var i=zero; i<=N; i++){
        subset(eStr+arr[i],N,arr,i+1)
    }

}



function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    subset("",N-1,arr,0)
    console.log(count)
}

runProgram(`2
-2 4`)

console.log((-8+-4+1)%2)