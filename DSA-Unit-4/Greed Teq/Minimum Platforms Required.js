function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].trim(" ").split(" ")
   let dep = input[2].trim(" ").split(" ")
    
    console.log(dep.sort())
}
runProgram(`6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`)