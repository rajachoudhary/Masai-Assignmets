function runProgram(input){
    input = input.split("\n")
    let N = +input[0]
    let arr = input[1].split(" ").map(Number)
    arr.sort((a,z)=> a-z)
    let odd = []
    let even = []
    for (let i = 0; i < N; i++) {
       if(arr[i] %2 === 0){
           even.push(arr[i])
       } else {
           odd.push(arr[i])
       }
    }
    let finalArr = [...odd,...even]
    console.log(finalArr.join(" "))
}
runProgram(`5
2 5 1 4 2`)