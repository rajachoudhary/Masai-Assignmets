function gsd(a,b){
    if(a===0){
        return b
    } else {
        return gsd(b%a,a) 
    }
}

function runProgram(input){

    var input = input.split("\n")
    var N = Number(input[0])

    for(var i=1; i<=N; i++){
        let num = input[i].split(" ").map(Number)
        let a = num[0]
        let b = num[1]
        let output = gsd(a,b)
        console.log(output) 
    }

}
runProgram(`2
6 9
2 25`)

// console.log(18%30)