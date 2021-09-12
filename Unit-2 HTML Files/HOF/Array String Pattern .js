var input = ["apple", "windows", "ubuntu", "cola", "system"]

var stringFilter = function (el) {
    
    if(el[0] === "a" || el[el.length-1] === "a"){

        return el;
    }
}
var arr = input.filter(stringFilter)
console.log(arr)