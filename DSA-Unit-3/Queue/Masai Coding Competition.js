function runProgram(input){
    input = input.trim().split("\n")
    var N = Number(input[0])
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var masterQ = [];
    var Q1 = []
    var Q2 = []
    var Q3 = []
    var Q4 = []
    var count = 0
    for(var i = 1; i<=N; i++){

        var operations = input[i].trim().split(" ")
        var output = []

        if(operations[0] === "E"){

            if (operations[1] === "1"){

                if(flag1 === false){

                    masterQ.push(operations[1])
                    Q1.push(operations[2])
                    flag1 = true;

                } 
                else {
                    Q1.push(operations[2])
                }
            } 
            else if (operations[1] === "2"){

                if(flag2 === false){

                    masterQ.push(operations[1])
                    Q2.push(operations[2])
                    flag2 = true;

                }
                else {
                    Q2.push(operations[2])
                }
            } 
            else if (operations[1] === "3"){

                if(flag3 === false){

                    masterQ.push(operations[1])
                    Q3.push(operations[2])
                    flag3 = true;

                } 
                else {
                    Q3.push(operations[2])
                }

            } 
            else if (operations[1] === "4"){

                if(flag4 === false){

                    masterQ.push(operations[1])
                    Q4.push(operations[2])
                    flag4 = true;

                } 
                else {
                    Q4.push(operations[2])
                }
            } 
        } 
        else {

            if(Q1.length>1 && masterQ[0] === "1"){

                output.push(masterQ[0])
                output.push(Q1[0])
                Q1.shift()
                
            }
            else if (Q1.length === 1 && masterQ[0] === "1"){
                output.push(masterQ[0])
                output.push(Q1[0])
                Q1.shift()
                masterQ.shift()
                flag1 = false
            } 
            else if(Q2.length>1 && masterQ[0] === "2"){

                output.push(masterQ[0])
                output.push(Q2[0])
                Q2.shift()
                
            }
            else if (Q2.length === 1 && masterQ[0] === "2"){
                output.push(masterQ[0])
                output.push(Q2[0])
                Q2.shift()
                masterQ.shift()
                flag2 = false
            } 
            else if(Q3.length>1 && masterQ[0] === "3"){

                output.push(masterQ[0])
                output.push(Q3[0])
                Q3.shift()
                
            }
            else if (Q3.length === 1 && masterQ[0] === "3"){
                output.push(masterQ[0])
                output.push(Q3[0])
                Q3.shift()
                masterQ.shift()
                flag3 = false
            } 
            else if(Q4.length>1 && masterQ[0] === "4"){

                output.push(masterQ[0])
                output.push(Q4[0])
                Q4.shift()
                
            } 
            else if (Q4.length === 1 && masterQ[0] === "4"){
                output.push(masterQ[0])
                output.push(Q4[0])
                Q4.shift()
                masterQ.shift()
                flag4 = false
            } 
            console.log(output.join(" "))
        }
    }
    
}
runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`)