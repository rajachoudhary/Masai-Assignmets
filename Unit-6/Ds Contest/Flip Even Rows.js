function runProgram(input){
    input = input.split("\n")
    let rc = input[0].split(" ").map(Number)
    let R = rc[0]
    let C = rc[1]
    let line = 1
   for (let i = 0; i < R; i++) {
        let arr = input[line++].split(" ").map(Number)

        if(i >0 && i%2 != 0){

            console.log(arr.reverse().join(" "))
        } else{
            console.log(arr.join(" "))
        }
    //    console.log(input)
   }
}
runProgram(`4 2
1 2
3 4
5 6
7 8`)