function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    for(var i=1; i<=N*2; i+=2){
       let num = Number(input[i].split(".").join(""))
       let num1 = Number(input[i+1].split(".").join(""))
        if(num1>num){
            console.log("True")
        }else{
            console.log("False")
        }
    }
    
    
   
    
}
runProgram(`3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`)