function runProgram(input){
    input = input.split("\n")
    var t = Number(input[0])
    var line = 1
    for(var i=0; i<t; i++){
        var n = input[line++].split(" ").map(Number)
        var arr = input[line++].split(" ").map(Number)
        
        var size=n[0];
        var k=n[1];
        k=k%size;
        // console.log(k)
        var arr2=[];
        for(let i=0;i<size;i++)
        {
            arr2.push(arr[(size+i-k)%size]);
            // console.log(size , i, k,size)
            // console.log((size+i-k)%size)
            
        }
        // console.log(arr2.join(" "));
        
    }
    console.log(5%6)
}
runProgram(`3
5 9
1 2 3 4 5
2 2
1 2
2 3
1 2`)

