var numbers = [11,12,13,14,15,16]
// 1
numbers.forEach(function(el){
    console.log(el*el )
})

// 2
var double = function(el){
    return el*2
}
var num_double = numbers.map(double)
console.log(num_double)

// 3
var isOdd = function(el){
    return el%2 == 1
}
var num_odd = numbers.filter(isOdd)
console.log(num_odd)

// 4
var product = function(ac,el){
    return ac*el
}
var num_prod = numbers.reduce(product)
console.log(num_prod)

// 5
var sum = function(ac,el){
    return ac + el
}
var num_odd_sum = numbers.filter(isOdd).reduce(sum)
console.log(num_odd_sum)


var  divBy3 = function(el){
    return el % 3 == 0;
}

var cubes = function(el){
    return el**3;
}

var num_3cube_sum = numbers.filter(divBy3).map(cubes).reduce(sum);
console.log(num_3cube_sum)