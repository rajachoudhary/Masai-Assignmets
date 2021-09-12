function runProgram(input){
    input = Number(input)
    if(input%35 === 0){
        console.log("Masai School")
    } else if (input%7 === 0){
        console.log("Masai")
    } else if(input%5 === 0){
        console.log("School")
    } else {
        console.log("Hurrat!")
    }
    
}
runProgram(`7`)