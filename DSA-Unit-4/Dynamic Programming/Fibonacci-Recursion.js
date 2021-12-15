function fibonacci(input,arr){
    
    if(input === 0 || input === 1){
        return arr[input] = input
    } 
    else if (arr[input] !== -1){
        return arr[input]
    } 
    else {
        arr[input] =  fibonacci(input-1,arr) + fibonacci(input-2,arr)
        console.log(arr[input])
        return arr[input]
    }
    
}
function runProgram(input){
    input = Number(input)
    const arr = new Array(input+1).fill(-1)
    console.log(arr)
    let output = fibonacci(input,arr)
    console.log(output)
}
runProgram(`6`)