function runProgram(input){
    input = Number(input)
    var count = 0
    for(var i=2; i<=input; i++){

        if(input % i === 0){
            count++
        }
        if (count > 3){
            break;
        }
    }

    if(count < 2 || input === 2){
        console.log("Yes")
    } else {
        console.log("No")
    }


}
runProgram(`10001`)