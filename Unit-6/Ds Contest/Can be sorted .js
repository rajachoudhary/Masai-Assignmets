function runProgram(input){
    input = input.split("\n") 
    let N = +input[0]
     let  arr = input[1].split(" ").map(Number)
     let count = 0
     let arr2 = []
     for (let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]){
           arr2.push(input[1])
        }
     }
     let arrFinal = arr.join(" ") + " " + arr2.join(" ") 
     console.log(arrFinal)
}
runProgram(`10
-1 0 1 2 3 10 9 7 6 4`)
