function NewsPaper(title,id){
    this.name = title;
    this.createAt = new Date().toString();
    this.day = new Date().getDay();
    this.month = new Date().getMonth();
    this.id = id
}

var p = new NewsPaper("Times of India", "2021-09-07")
console.log(p)

function Stack(){
    this.value = []
    this.pop = function(){
        if(this.value.length > 0){

            return this.value.pop()
        } else {
            console.log("Stack is empty!")
        }
    }
    this.push = function(value){

        this.value.push(value)
    }
    this.peek = function(){
        console.log(this.value[this.value.length-1])
        return this.value[this.value.length -1];
    }
    var stack = new Stack()
    stack.push(5)
    stack.peek()
    stack.pop()
}