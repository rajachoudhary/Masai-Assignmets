var loginDet = JSON.parse( localStorage.getItem("info"))
    
var submit = document.getElementById("submit")


submit.addEventListener("click", function(){
    var flag = false;
    for (var i = 0; i <loginDet.length; i++) {
        let email = document.getElementById("email").value
        let password = document.getElementById("pass").value

        if(email === loginDet[i].email && password === loginDet[i].password){
            location.assign ("http://127.0.0.1:5500/Unit-3%20HTML%20Files/asyc/Movie%20Ticket/Movie%20Website-I.html")
            flag = true;
            break;
        } 
        
        
    }
    if(flag != true){
        console.log(alert("Invalid Credential"))
    }
})




