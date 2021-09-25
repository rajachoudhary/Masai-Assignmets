let arr = [];
// console.log(arr)
var submits = document.getElementById("submit");

function add(e) {
    e.preventDefault();
   var userName = document.getElementById("name").value
   var emails = document.getElementById("email").value
   var contacts = document.getElementById("contact").value
   var passwords = document.getElementById("pass").value

    let details = {
        name : userName,
        contact : contacts,
        email : emails,
        password : passwords,
    }
    arr.push(details)
   
    localStorage.setItem("info", JSON.stringify(arr))
    


}

function empty(){
    let data = JSON.parse(localStorage.getItem("info"))
    
    if(data){
        data = arr
        return data
    } 
    
}  

window.addEventListener("load", function() {
    
    submits.addEventListener("click",add)
    empty() 
})

