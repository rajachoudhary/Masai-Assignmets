function runProgram(input){
    input = input.trim(" ").split("\n")
    let K = Number(input[0])
    
    let arr = input[1].split(" ").map(Number)
    let dep = input[2].split(" ").map(Number)
    arr.sort((a,b)=>a-b)
    dep.sort((a,b)=>a-b)
    
    let count = 0
    for(var j=0; j<arr.length; j++){

    
        if(arr[j] < dep[j-1]){
            count++
        }
    }
    if(count > K){
        console.log("Not Possible")
    } else {
        console.log("Possible")
    }
       console.log(count) 
    
}
runProgram(`2
4 3 6 7 11
9 4 10 9 14`)