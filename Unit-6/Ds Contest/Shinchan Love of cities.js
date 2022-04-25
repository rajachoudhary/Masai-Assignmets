function output(arr,q){
    let cost = 0
    if(arr.length ==1){
        console.log(0)
    } else {
        for (let i = 0; i < arr.length-1; i++) {
            let diff = Math.abs(arr[i] - arr[i+1])
            cost  = cost + Number(diff)*q
            
        }
        console.log(cost)
    }
}


function runProgram(input){
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for (let j = 0; j <tc; j++) {
        let [n,q] = input [line++].split(" ").map(Number)
        let arr = input[line++].split(" ").map(Number)
        arr.sort((a,b)=>a-b)
        output(arr,q)
    }
}

runProgram(`2
2 4
2 1
1 5
3`)