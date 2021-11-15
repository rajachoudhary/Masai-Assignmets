function runProgram(input){
input = input.split("\n").map(Number)
var money = input[0]
var students = input[1]

if(money >= students*5){
    console.log("Dairy Milk")
} else if(money >= students*2){
    console.log("Shots")
} else if(money > students*1){
    console.log("Eclairs")
} else {
    console.log("No Chocolates")
}


}
runProgram(`10
15`)