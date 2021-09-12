var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var oddLengthArr = function (el) {

    if((el.length%2) != 0){
        return el
    }
    
}

var oddLength = function (el) {

    return el.length
}

var sum = function (acc,el) {
    
    return acc+el
}

var sumOddLengthArr = arr.filter(oddLengthArr).map(oddLength).reduce(sum)
console.log(sumOddLengthArr)
    

    