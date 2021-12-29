function runProgram(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1

    for(let i=0; i<T; i++){

        let nm = input[line++].split(" ").map(Number)
        let N = nm[0]
        let M = nm[1]
        let arr = input[line++].split(" ").map(Number)
        let sum = 0
        arr.map((item)=> sum+=item)
        
        // for(var j=0; j<arr.length; j++){

        // }
        console.log(M)
    }
}
runProgram(`2
4 10
1 2 3 4
4 5
1 2 3 4`)