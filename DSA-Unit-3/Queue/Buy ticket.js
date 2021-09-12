function runProgram(input){
    input = input.trim().split("\n")
    var output = []
    var rear = 0
    for(var i = 1; i < input.length; i++){
        var ticket = input[i].trim().split(" ")
        var value = []
        if(ticket[0] === "E"){
            output[rear] = ticket[1]
            rear++
            value.push(rear)

        } else if (ticket[0] === "D"){

            if( output.length > 0){
                value.push(output[0])
                output.shift()
                value.push(output.length)
                rear--
            } else {
                value.push(-1)
                value.push(output.length)
            }

        }
        console.log(value.join(" "))
    }
}
runProgram(`10
D
D
E 51
E 64
E 44
D
E 54
E 74
D
E 47`)

// -1 0
// -1 0
// 1
// 2
// 3
// 51 2
// 3
// 4
// 64 3
// 4