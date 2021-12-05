function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var stu = input[1].split(" ").map(Number)
    var rum = input[2].split(" ").map(Number)
    stu.sort((a,b)=>a-b)
    rum.sort((a,b)=>a-b)
    let minTime = 0;

    for(var i=0; i<N; i++){

        var minValue = Math.abs(rum[i]-stu[i])
        if(minTime < minValue){
           minTime = minValue
        }
    }
    console.log(minTime)
}
runProgram(`2
-2 4
-2 0 `)