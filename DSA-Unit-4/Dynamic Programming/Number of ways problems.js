function noOfWays(arr,input){

    // console.log(arr,input)
    
     if (input === 0){
        return  1
    }
    else if(input < 0 ){
        return 0
    } 
    else if (arr[input] !== -1){
        return arr[input]
    }
     else {
        arr[input] = noOfWays(arr,input-1) + noOfWays(arr,input-2) + noOfWays(arr,input-3)
        return arr[input]
    }
}

function runProgram(input){
    input = Number(input)
    let arr = new Array(input+1).fill(-1).map(el=>-1)
    let output = noOfWays(arr,input)
    console.log(arr,input)
    console.log(output)
}
runProgram(`4`)