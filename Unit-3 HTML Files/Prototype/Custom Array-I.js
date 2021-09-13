function MyArray(){
    this.length = 0
    this.push = function(value){
        this[this.length++] = value
        return;
    }
}

var arr = new MyArray()
arr.push(0)
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
console.log(arr)