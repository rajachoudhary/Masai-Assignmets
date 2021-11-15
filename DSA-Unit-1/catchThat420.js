function runProgram(input){

    var caught = ""
    for(var i=0; i<input.length; i++){
        var str = ""

        for(var j=i; j<input.length; j++){
            str+= input[j]
        }
        if(str === "420"){
            caught = "420"
        }
    }
   
    if(caught === "420"){
        console.log("Caught")
    } else{
        console.log("Escaped")
    }
}
runProgram(`97420`)