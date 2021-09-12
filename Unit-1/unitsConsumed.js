function runProgram(input){
    input = Number(input)
    var bill = input - 80
    var remainingBill = 0
    var unit = 0

    if(bill > 150){
        remainingBill = bill - 150
        unit += 50
    } 
    else {
        unit = bill/3
        console.log(Math.floor(unit))
    }

    if(remainingBill > 500){
        remainingBill = remainingBill - 500
        unit += 100
    } 
    else if(remainingBill < 500 && remainingBill > 0) {
        unit = unit + remainingBill/5  
        console.log(Math.floor(unit))
    }
    if(bill > 650){
        unit = unit + remainingBill/10
        console.log(unit)
    }


}
runProgram(`1500`)
