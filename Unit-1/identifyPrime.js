function runProgram(input){
   input = Number(input.split(" "))
   var count = 0

    for(var i=1; i<=input; i++){
    
        if(input%i === 0){
            count++
        }
        if (count > 2){
            break;
        }

    }
    console.log(count)
    
    if(count === 2 || input === 2 ){
        console.log("Yes")
    } else {
        console.log("No")
    }
    
}
runProgram(`13`)