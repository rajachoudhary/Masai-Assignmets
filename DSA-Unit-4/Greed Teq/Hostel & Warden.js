function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var stu = input[1].split(" ").map(Number)
    var rom = input[2].split(" ").map(Number)
    stu.sort((a,b)=>a-b)
    rom.sort((a,b)=>a-b)
    let minTime = 0;

    for(var i=0; i<N; i++){

        let minValue = rom[i]-stu[i]
        if()
    }
}
runProgram(`3
4 -4 2
4 0 5`)